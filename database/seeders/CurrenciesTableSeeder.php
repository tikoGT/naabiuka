<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('currencies')->delete();

        \DB::table('currencies')->insert([
            0 => [
                'id' => 1,
                'name' => 'BDT',
                'symbol' => '৳',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            1 => [
                'id' => 2,
                'name' => 'EUR',
                'symbol' => '€',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            2 => [
                'id' => 3,
                'name' => 'USD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            3 => [
                'id' => 4,
                'name' => 'GBP',
                'symbol' => '£',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            4 => [
                'id' => 5,
                'name' => 'RUB',
                'symbol' => '₽',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            5 => [
                'id' => 6,
                'name' => 'AFN',
                'symbol' => 'Afs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            6 => [
                'id' => 7,
                'name' => 'ALL',
                'symbol' => 'Lek',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            7 => [
                'id' => 8,
                'name' => 'DZD',
                'symbol' => 'DA',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            8 => [
                'id' => 9,
                'name' => 'AOA',
                'symbol' => 'Kz',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            9 => [
                'id' => 10,
                'name' => 'XCD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            10 => [
                'id' => 11,
                'name' => 'ARS',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            11 => [
                'id' => 12,
                'name' => 'AMD',
                'symbol' => '֏',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            12 => [
                'id' => 13,
                'name' => 'AWG',
                'symbol' => 'ƒ',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            13 => [
                'id' => 14,
                'name' => 'SHP',
                'symbol' => '£',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            14 => [
                'id' => 15,
                'name' => 'AUD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            15 => [
                'id' => 16,
                'name' => 'AZN',
                'symbol' => '₼',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            16 => [
                'id' => 17,
                'name' => 'BSD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            17 => [
                'id' => 18,
                'name' => 'BHD',
                'symbol' => 'BD',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            18 => [
                'id' => 19,
                'name' => 'BBD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            19 => [
                'id' => 20,
                'name' => 'BYN',
                'symbol' => 'Rbls',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            20 => [
                'id' => 21,
                'name' => 'BZD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            21 => [
                'id' => 22,
                'name' => 'XOF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            22 => [
                'id' => 23,
                'name' => 'BMD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            23 => [
                'id' => 24,
                'name' => 'BTN',
                'symbol' => 'Nu',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            24 => [
                'id' => 25,
                'name' => 'INR',
                'symbol' => '₹',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            25 => [
                'id' => 26,
                'name' => 'BOB',
                'symbol' => 'Bs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            26 => [
                'id' => 27,
                'name' => 'BAM',
                'symbol' => 'KM',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            27 => [
                'id' => 28,
                'name' => 'BWP',
                'symbol' => 'P',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            28 => [
                'id' => 29,
                'name' => 'BRL',
                'symbol' => 'R$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            29 => [
                'id' => 30,
                'name' => 'BND',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            30 => [
                'id' => 31,
                'name' => 'SGD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            31 => [
                'id' => 32,
                'name' => 'BGN',
                'symbol' => 'Lev',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            32 => [
                'id' => 33,
                'name' => 'BIF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            33 => [
                'id' => 34,
                'name' => 'KHR',
                'symbol' => 'CR',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            34 => [
                'id' => 35,
                'name' => 'XAF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            35 => [
                'id' => 36,
                'name' => 'CAD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            36 => [
                'id' => 37,
                'name' => 'CVE',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            37 => [
                'id' => 38,
                'name' => 'KYD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            38 => [
                'id' => 39,
                'name' => 'CLP',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            39 => [
                'id' => 40,
                'name' => 'CNY',
                'symbol' => '¥',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            40 => [
                'id' => 41,
                'name' => 'COP',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            41 => [
                'id' => 42,
                'name' => 'KMF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            42 => [
                'id' => 43,
                'name' => 'CDF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            43 => [
                'id' => 44,
                'name' => 'NZD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            44 => [
                'id' => 45,
                'name' => 'CRC',
                'symbol' => '₡',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            45 => [
                'id' => 46,
                'name' => 'HRK',
                'symbol' => 'kn',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            46 => [
                'id' => 47,
                'name' => 'CUP',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            47 => [
                'id' => 48,
                'name' => 'ANG',
                'symbol' => 'ƒ',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            48 => [
                'id' => 49,
                'name' => 'CZK',
                'symbol' => 'Kč',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            49 => [
                'id' => 50,
                'name' => 'DKK',
                'symbol' => 'kr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            50 => [
                'id' => 51,
                'name' => 'DJF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            51 => [
                'id' => 52,
                'name' => 'DOP',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            52 => [
                'id' => 53,
                'name' => 'EGP',
                'symbol' => 'LE',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            53 => [
                'id' => 54,
                'name' => 'ERN',
                'symbol' => 'Nkf',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            54 => [
                'id' => 55,
                'name' => 'SZL',
                'symbol' => 'E',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            55 => [
                'id' => 56,
                'name' => 'ZAR',
                'symbol' => 'R',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            56 => [
                'id' => 57,
                'name' => 'ETB',
                'symbol' => 'Br',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            57 => [
                'id' => 58,
                'name' => 'FKP',
                'symbol' => '£',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            58 => [
                'id' => 59,
                'name' => 'FJD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            59 => [
                'id' => 60,
                'name' => 'XPF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            60 => [
                'id' => 61,
                'name' => 'GMD',
                'symbol' => 'D',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            61 => [
                'id' => 62,
                'name' => 'GEL',
                'symbol' => '₾',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            62 => [
                'id' => 63,
                'name' => 'GHS',
                'symbol' => '₵',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            63 => [
                'id' => 64,
                'name' => 'GIP',
                'symbol' => '£',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            64 => [
                'id' => 65,
                'name' => 'GTQ',
                'symbol' => 'Q',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            65 => [
                'id' => 66,
                'name' => 'GNF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            66 => [
                'id' => 67,
                'name' => 'GYD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            67 => [
                'id' => 68,
                'name' => 'HTG',
                'symbol' => 'G',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            68 => [
                'id' => 69,
                'name' => 'HNL',
                'symbol' => 'L',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            69 => [
                'id' => 70,
                'name' => 'HKD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            70 => [
                'id' => 71,
                'name' => 'HUF',
                'symbol' => 'Ft',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            71 => [
                'id' => 72,
                'name' => 'ISK',
                'symbol' => 'kr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            72 => [
                'id' => 73,
                'name' => 'IDR',
                'symbol' => 'Rp',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            73 => [
                'id' => 74,
                'name' => 'IRR',
                'symbol' => 'Rls',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            74 => [
                'id' => 75,
                'name' => 'IQD',
                'symbol' => 'ID',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            75 => [
                'id' => 76,
                'name' => 'ILS',
                'symbol' => '₪',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            76 => [
                'id' => 77,
                'name' => 'JMD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            77 => [
                'id' => 78,
                'name' => 'JPY',
                'symbol' => '¥',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            78 => [
                'id' => 79,
                'name' => 'JOD',
                'symbol' => 'JD',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            79 => [
                'id' => 80,
                'name' => 'KZT',
                'symbol' => '₸',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            80 => [
                'id' => 81,
                'name' => 'KES',
                'symbol' => 'KSh',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            82 => [
                'id' => 83,
                'name' => 'KPW',
                'symbol' => '₩',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            83 => [
                'id' => 84,
                'name' => 'KRW',
                'symbol' => '₩',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            84 => [
                'id' => 85,
                'name' => 'KWD',
                'symbol' => 'KD',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            85 => [
                'id' => 86,
                'name' => 'KGS',
                'symbol' => 'som',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            86 => [
                'id' => 87,
                'name' => 'LAK',
                'symbol' => '₭',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            87 => [
                'id' => 88,
                'name' => 'LBP',
                'symbol' => 'LL',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            88 => [
                'id' => 89,
                'name' => 'LSL',
                'symbol' => 'M',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            89 => [
                'id' => 90,
                'name' => 'ZAR',
                'symbol' => 'R',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            90 => [
                'id' => 91,
                'name' => 'LRD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            91 => [
                'id' => 92,
                'name' => 'LYD',
                'symbol' => 'LD',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            92 => [
                'id' => 93,
                'name' => 'CHF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            93 => [
                'id' => 94,
                'name' => 'MOP',
                'symbol' => 'MOP$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            94 => [
                'id' => 95,
                'name' => 'MGA',
                'symbol' => 'Ar',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            95 => [
                'id' => 96,
                'name' => 'MWK',
                'symbol' => 'K',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            96 => [
                'id' => 97,
                'name' => 'MYR',
                'symbol' => 'RM',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            97 => [
                'id' => 98,
                'name' => 'MVR',
                'symbol' => 'Rf',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            98 => [
                'id' => 99,
                'name' => 'MRU',
                'symbol' => 'UM',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            99 => [
                'id' => 100,
                'name' => 'MUR',
                'symbol' => 'Rs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            100 => [
                'id' => 101,
                'name' => 'MXN',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            101 => [
                'id' => 102,
                'name' => 'MDL',
                'symbol' => 'Lei',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            102 => [
                'id' => 103,
                'name' => 'MNT',
                'symbol' => '₮',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            103 => [
                'id' => 104,
                'name' => 'MAD',
                'symbol' => 'DH',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            104 => [
                'id' => 105,
                'name' => 'MZN',
                'symbol' => 'Mt',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            105 => [
                'id' => 106,
                'name' => 'MMK',
                'symbol' => 'Ks',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            106 => [
                'id' => 107,
                'name' => 'NAD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            107 => [
                'id' => 108,
                'name' => 'NPR',
                'symbol' => 'Rs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            108 => [
                'id' => 109,
                'name' => 'NIO',
                'symbol' => 'C$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            109 => [
                'id' => 110,
                'name' => 'NGN',
                'symbol' => '₦',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            110 => [
                'id' => 111,
                'name' => 'MKD',
                'symbol' => 'DEN',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            111 => [
                'id' => 112,
                'name' => 'TRY',
                'symbol' => '₺',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            112 => [
                'id' => 113,
                'name' => 'NOK',
                'symbol' => 'kr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            113 => [
                'id' => 114,
                'name' => 'OMR',
                'symbol' => 'RO',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            114 => [
                'id' => 115,
                'name' => 'PKR',
                'symbol' => 'Rs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            115 => [
                'id' => 116,
                'name' => 'ILS',
                'symbol' => '₪',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            116 => [
                'id' => 117,
                'name' => 'PAB',
                'symbol' => 'B/',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            117 => [
                'id' => 118,
                'name' => 'PGK',
                'symbol' => 'K',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            118 => [
                'id' => 119,
                'name' => 'PYG',
                'symbol' => '₲',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            119 => [
                'id' => 120,
                'name' => 'PEN',
                'symbol' => 'S/',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            120 => [
                'id' => 121,
                'name' => 'PHP',
                'symbol' => '₱',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            121 => [
                'id' => 122,
                'name' => 'PLN',
                'symbol' => 'zł',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            122 => [
                'id' => 123,
                'name' => 'QAR',
                'symbol' => 'QR',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            123 => [
                'id' => 124,
                'name' => 'RON',
                'symbol' => 'Lei',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            124 => [
                'id' => 125,
                'name' => 'RWF',
                'symbol' => 'Fr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            125 => [
                'id' => 126,
                'name' => 'WST',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            126 => [
                'id' => 127,
                'name' => 'STN',
                'symbol' => 'Db',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            127 => [
                'id' => 128,
                'name' => 'SAR',
                'symbol' => 'Rls',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            128 => [
                'id' => 129,
                'name' => 'RSD',
                'symbol' => 'DIN',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            129 => [
                'id' => 130,
                'name' => 'SCR',
                'symbol' => 'Rs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            130 => [
                'id' => 131,
                'name' => 'SLE',
                'symbol' => 'Le',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            131 => [
                'id' => 132,
                'name' => 'SBD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            132 => [
                'id' => 133,
                'name' => 'SOS',
                'symbol' => 'Shs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            133 => [
                'id' => 134,
                'name' => 'LKR',
                'symbol' => 'Rs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            134 => [
                'id' => 135,
                'name' => 'SDG',
                'symbol' => 'LS',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            135 => [
                'id' => 136,
                'name' => 'SRD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            136 => [
                'id' => 137,
                'name' => 'SEK',
                'symbol' => 'kr',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            137 => [
                'id' => 138,
                'name' => 'SYP',
                'symbol' => 'LS',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            138 => [
                'id' => 139,
                'name' => 'TWD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            139 => [
                'id' => 140,
                'name' => 'TJS',
                'symbol' => 'TJS',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            140 => [
                'id' => 141,
                'name' => 'TZS',
                'symbol' => 'Shs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            141 => [
                'id' => 142,
                'name' => 'THB',
                'symbol' => '฿',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            142 => [
                'id' => 143,
                'name' => 'TOP',
                'symbol' => 'T$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            143 => [
                'id' => 144,
                'name' => 'TTD',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            144 => [
                'id' => 145,
                'name' => 'TND',
                'symbol' => 'DT',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            145 => [
                'id' => 146,
                'name' => 'TMT',
                'symbol' => 'm',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            146 => [
                'id' => 147,
                'name' => 'UGX',
                'symbol' => 'Shs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            147 => [
                'id' => 148,
                'name' => 'UAH',
                'symbol' => '₴',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            148 => [
                'id' => 149,
                'name' => 'AED',
                'symbol' => 'Dhs',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            149 => [
                'id' => 150,
                'name' => 'UYU',
                'symbol' => '$',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            150 => [
                'id' => 151,
                'name' => 'UZS',
                'symbol' => 'soum',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            151 => [
                'id' => 152,
                'name' => 'VUV',
                'symbol' => 'VT',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            152 => [
                'id' => 153,
                'name' => 'VES',
                'symbol' => 'Bs.S',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            153 => [
                'id' => 154,
                'name' => 'VED',
                'symbol' => 'Bs.D',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            154 => [
                'id' => 155,
                'name' => 'VND',
                'symbol' => '₫',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            155 => [
                'id' => 156,
                'name' => 'YER',
                'symbol' => 'Rls',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
            156 => [
                'id' => 157,
                'name' => 'ZMW',
                'symbol' => 'K',
                'exchange_rate' => null,
                'exchange_from' => null,
            ],
        ]);

    }
}
