<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\MassPrunable;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Arr;

class NotificationLogItem extends Model
{
    use HasFactory;
    use MassPrunable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'extra' => 'array',
        'anonymous_notifiable_properties' => 'array',
        'confirmed_at' => 'datetime',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    public function prunable(): Builder
    {
        $threshold = config('notification.prune_after_days');

        return static::where('created_at', '<=', now()->subDays($threshold));
    }

    /**
     * Get the notifiable entity that the notification was sent to.
     */
    public function notifiable(): MorphTo
    {
        return $this->morphTo('notifiable');
    }

    /**
     * Determine if the notification was sent in the past minutes.
     */
    public function wasSentInPastMinutes(int $minutes = 1): bool
    {
        return $this->created_at > now()->subMinutes($minutes);
    }

    /**
     * Mark the notification as sent.
     *
     * @return $this
     */
    public function markAsSent(): self
    {
        $this->update([
            'confirmed_at' => now(),
        ]);

        return $this;
    }

    /**
     * Find the latest notification log item for the notifiable.
     *
     * @param  mixed  $notifiable
     */
    public static function latestFor(
        $notifiable,
        ?string $fingerprint = null,
        string|array|null $notificationType = null,
        ?Carbon $before = null,
        ?Carbon $after = null,
        string|array|null $channel = null,
    ): ?NotificationLogItem {
        return self::latestForQuery(...func_get_args())->first();
    }

    /**
     * Get the latest notification log item for the notifiable.
     *
     * @param  mixed  $notifiable
     */
    public static function latestForQuery(
        $notifiable,
        ?string $fingerprint = null,
        string|array|null $notificationType = null,
        ?Carbon $before = null,
        ?Carbon $after = null,
        string|array|null $channel = null,
    ): Builder {
        return self::query()
            ->where('notifiable_type', $notifiable->getMorphClass())
            ->where('notifiable_id', $notifiable->getKey())
            ->when($fingerprint, fn (Builder $query) => $query->where('fingerprint', $fingerprint))
            ->when($notificationType, function (Builder $query) use ($notificationType) {
                $query->whereIn('notification_type', Arr::wrap($notificationType));
            })
            ->when($channel, function (Builder $query) use ($channel) {
                $query->whereIn('channel', Arr::wrap($channel));
            })
            ->when($before, function (Builder $query) use ($before) {
                $query->where('created_at', '<', $before->toDateTimeString());
            })
            ->when($after, function (Builder $query) use ($after) {
                $query->where('created_at', '>', $after->toDateTimeString());
            })
            ->orderByDesc('created_at')
            ->orderByDesc('id');
    }
}
