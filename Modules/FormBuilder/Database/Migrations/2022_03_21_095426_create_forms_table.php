<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('forms');
        Schema::create('forms', function (Blueprint $table) {
            $table->increments('id');

            $table->bigInteger('user_id')->nullable();

            $table->string('name');
            $table->string('visibility');
            $table->boolean('allows_edit')->default(false);

            $table->string('type');

            $table->string('identifier')->unique();
            $table->text('form_builder_json')->nullable();

            $table->string('custom_submit_url')->nullable();

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
}
