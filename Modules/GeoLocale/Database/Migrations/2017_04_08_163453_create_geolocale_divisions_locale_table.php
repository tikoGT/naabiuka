<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGeoLocaleDivisionsLocaleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geolocale_divisions_locale', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('Auto Increase ID');
            $table->bigInteger('division_id')->unsigned()->comment('Division ID');
            $table->string('name', 191)->default('')->comment('Localized Division Name');
            $table->string('abbr', 16)->nullable()->comment('Localized Division Abbr');
            $table->string('alias', 191)->nullable()->comment('Localized Division Alias');
            $table->string('full_name', 191)->nullable()->comment('Localized Division Fullname');
            $table->string('locale', 6)->nullable()->comment('locale');
            $table->unique(['division_id', 'locale'], 'uniq_division_id_locale');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('geolocale_divisions_locale');
    }
}
