<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGeoLocaleContinentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geolocale_continents', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('Auto increase ID');
            $table->string('name', 16)->default('')->index('uniq_continent')->comment('Continent Name');
            $table->string('code', 2)->default('')->comment('Continent Code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('geolocale_continents');
    }
}
