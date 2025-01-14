<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGeoLocaleLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geolocale_languages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('iso_language_name', 191);
            $table->string('native_name', 191);
            $table->string('iso2', 2);
            $table->string('iso3', 3);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('geolocale_languages');
    }
}
