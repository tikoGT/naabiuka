<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormSubmissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('form_submissions');

        Schema::create('form_submissions', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('form_id')->unsigned();

            $table->bigInteger('user_id')->nullable();

            $table->text('content');

            $table->timestamps();

            $table->foreign('form_id')->references('id')->on('forms')->onDelete('CASCADE');
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
        Schema::dropIfExists('form_submission');
    }
}
