<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGeoLocaleCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geolocale_countries', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('Auto increase ID');
            $table->bigInteger('continent_id')->unsigned()->comment('Continent ID');
            $table->string('name', 191)->default('')->comment('Country Common Name');
            $table->string('full_name', 191)->nullable()->comment('Country Fullname');
            $table->string('capital', 191)->nullable()->comment('Capital Common Name');
            $table->string('code', 4)->nullable()->comment('ISO3166-1-Alpha-2');
            $table->string('code_alpha3', 6)->nullable()->comment('ISO3166-1-Alpha-3');
            $table->string('emoji', 16)->nullable()->comment('Country Emoji');
            $table->boolean('has_division')->default(0)->comment('Has Division');
            $table->string('currency_code', 3)->nullable()->comment('iso_4217_code');
            $table->string('currency_name', 128)->nullable()->comment('iso_4217_name');
            $table->string('currency_symbol')->nullable();
            $table->string('tld', 8)->nullable()->comment('Top level domain');
            $table->string('callingcode', 8)->nullable()->comment('Calling prefix');
            $table->unique(['continent_id', 'name'], 'uniq_country');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('geolocale_countries');
    }
}
