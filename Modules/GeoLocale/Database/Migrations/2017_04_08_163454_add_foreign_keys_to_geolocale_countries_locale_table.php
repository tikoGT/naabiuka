<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToGeoLocaleCountriesLocaleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('geolocale_countries_locale', function (Blueprint $table) {
            $table->foreign('country_id', 'geolocale_countries_locale_ibfk_1')->references('id')->on('geolocale_countries')->onUpdate('RESTRICT')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('geolocale_countries_locale', function (Blueprint $table) {
            $table->dropForeign('geolocale_countries_locale_ibfk_1');
        });
    }
}
