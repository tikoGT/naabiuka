<?php

namespace Modules\CMS\Database\Seeders;

use Illuminate\Database\Seeder;

class ComponentPropertiesTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        $data =  [
            0 => [
                'id' => 4,
                'component_id' => 2,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Top Categories Of the Month',
            ],
            1 => [
                'id' => 5,
                'component_id' => 2,
                'name' => 'category_type',
                'type' => 'string',
                'value' => 'selectedCategories',
            ],
            2 => [
                'id' => 6,
                'component_id' => 2,
                'name' => 'categories',
                'type' => 'array',
                'value' => '["38","39","41","42","46","47","49"]',
            ],
            3 => [
                'id' => 7,
                'component_id' => 3,
                'name' => 'title',
                'type' => 'string',
                'value' => 'BEST DEALS OF THE WEEK',
            ],
            4 => [
                'id' => 8,
                'component_id' => 3,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '0',
            ],
            5 => [
                'id' => 9,
                'component_id' => 3,
                'name' => 'more_link',
                'type' => 'string',
                'value' => '',
            ],
            6 => [
                'id' => 10,
                'component_id' => 3,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => 'slider',
            ],
            7 => [
                'id' => 11,
                'component_id' => 3,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'left',
            ],
            8 => [
                'id' => 12,
                'component_id' => 3,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'newArrivals',
            ],
            9 => [
                'id' => 13,
                'component_id' => 3,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '8',
            ],
            10 => [
                'id' => 14,
                'component_id' => 3,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"LIVING & LIFESTYLE","l_subtitle":"DECORATE","title":"YOUR HOME","image":"20221123/b05bc24c3a122d465099a05a24d2fa3b.webp","button":"SHOW NOW","link":"http:\\/\\/google.com"}',
            ],
            11 => [
                'id' => 15,
                'component_id' => 3,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"ORGANIC","l_subtitle":"<span style=\\"color: #F81B4D\\">HEALTHY<\\/span> LIFE ","title":"ADVENTURES","image":"20221205/bdf1b2983bbb8fdd1660117bad20b550.webp","button_text":"Explore Now","button_link":"https://demo.martvill.techvill.net/search-products?categories=Woman%20Fashion"},{"u_subtitle":"ORGANIC","l_subtitle":"<span style=\\"color: #F81B4D\\">HEALTHY<\\/span> LIFE ","title":"ADVENTURES","image":"20221205/b54581f3631b4160ebca1b7abdd43615.webp","button_text":"Visit","button_link":"https://demo.martvill.techvill.net/search-products?categories=Home%20Appliances"},{"u_subtitle":"ORGANIC","l_subtitle":"<span style=\\"color: #F81B4D\\">HEALTHY<\\/span> LIFE ","title":"ADVENTURES","image":"20221205/df0c8982b5edc94493c84fe23c95c5e2.webp","button_text":"Shop Now","button_link":"https://demo.martvill.techvill.net/search-products?categories=Man%20Fashion"},{"u_subtitle":"ORGANIC","l_subtitle":"<span style=\\"color: #F81B4D\\">HEALTHY<\\/span> LIFE ","title":"ADVENTURES","image":"20221205/3701e828742af4336f96019823e8faba.webp","button_text":"Buy Now","button_link":"https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices"}]',
            ],
            12 => [
                'id' => 16,
                'component_id' => 3,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":""}',
            ],
            13 => [
                'id' => 30,
                'component_id' => 4,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Flash Sale',
            ],
            14 => [
                'id' => 31,
                'component_id' => 4,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '0',
            ],
            15 => [
                'id' => 32,
                'component_id' => 4,
                'name' => 'more_link',
                'type' => 'string',
                'value' => '#',
            ],
            16 => [
                'id' => 33,
                'component_id' => 4,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => 'flash_sale',
            ],
            17 => [
                'id' => 34,
                'component_id' => 4,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'left',
            ],
            18 => [
                'id' => 35,
                'component_id' => 4,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'flashSales',
            ],
            19 => [
                'id' => 36,
                'component_id' => 4,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '9',
            ],
            20 => [
                'id' => 37,
                'component_id' => 4,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"","l_subtitle":"","title":"","button":"","link":""}',
            ],
            21 => [
                'id' => 38,
                'component_id' => 4,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"","l_subtitle":"","title":"","button_text":"","button_link":""}]',
            ],
            22 => [
                'id' => 39,
                'component_id' => 4,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":"Deal Of The Day"}',
            ],
            23 => [
                'id' => 56,
                'component_id' => 6,
                'name' => 'upper_st',
                'type' => 'string',
                'value' => 'Best in Electronics',
            ],
            24 => [
                'id' => 57,
                'component_id' => 6,
                'name' => 'lower_st',
                'type' => 'string',
                'value' => 'Starting from only <span style="color: #FA886A">$9.99</span>',
            ],
            25 => [
                'id' => 58,
                'component_id' => 6,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Gadget Town',
            ],
            26 => [
                'id' => 59,
                'component_id' => 6,
                'name' => 'btn_text',
                'type' => 'string',
                'value' => 'Shop Now',
            ],
            27 => [
                'id' => 60,
                'component_id' => 6,
                'name' => 'btn_link',
                'type' => 'string',
                'value' => 'https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices',
            ],
            28 => [
                'id' => 61,
                'component_id' => 6,
                'name' => 'image',
                'type' => 'string',
                'value' => '20221205\\2dcff5a961eb2a3127b2fe3b87861d99.webp',
            ],
            29 => [
                'id' => 70,
                'component_id' => 15,
                'name' => 'cta',
                'type' => 'array',
                'value' => '[{"upper_st":"ELECTRONICS","lower_st":"ELECTROFY","title":"YOUR LIFW","image":"20220831/ad58f57577ee2331b94298ef8301a918.webp","btn_text":"SHOP NOW","btn_link":"https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices"},{"upper_st":"SHOES","lower_st":"ADD STYLES TO","title":"YOUR FEET","image":"20220831/138b95f17cd98bb837051dfbe54bf64d.webp","btn_text":"SHOP NOW","btn_link":"https://demo.martvill.techvill.net/search-products?categories=Fashion"}]',
            ],
            30 => [
                'id' => 74,
                'component_id' => 16,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Popular Departments',
            ],
            31 => [
                'id' => 75,
                'component_id' => 16,
                'name' => 'disp_categories',
                'type' => 'array',
                'value' => '["newArrivals","popularProducts","featureProducts","flashSales"]',
            ],
            32 => [
                'id' => 76,
                'component_id' => 16,
                'name' => 'max',
                'type' => 'string',
                'value' => '15',
            ],
            33 => [
                'id' => 80,
                'component_id' => 17,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Furniture ZONE',
            ],
            34 => [
                'id' => 81,
                'component_id' => 17,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '1',
            ],
            35 => [
                'id' => 82,
                'component_id' => 17,
                'name' => 'more_link',
                'type' => 'string',
                'value' => 'https://demo.martvill.techvill.net/search-products?categories=categories=Home%20Appliances',
            ],
            36 => [
                'id' => 83,
                'component_id' => 17,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => 'slide',
            ],
            37 => [
                'id' => 84,
                'component_id' => 17,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'left',
            ],
            38 => [
                'id' => 85,
                'component_id' => 17,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'queryProducts',
            ],
            39 => [
                'id' => 86,
                'component_id' => 17,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '6',
            ],
            40 => [
                'id' => 87,
                'component_id' => 17,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"Take A Look","l_subtitle":"On Our","title":"Furnitures","image":"20221203/4549648a85ebfff095bba62a585ddf9b.webp","button":"Shop Now","link":"https://demo.martvill.techvill.net/search-products?categories=categories=Home%20Appliances"}',
            ],
            41 => [
                'id' => 88,
                'component_id' => 17,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"SPORTS","l_subtitle":"SAFEGUARD YOUR","title":"ADVENTURES","image":"20221123/8aef5c1a8f0cb9c5f4dbf783ee501d47.webp","button_text":"Shop Now","button_link":"#"},{"u_subtitle":"SPORTS","l_subtitle":"SAFEGUARD YOUR","title":"ADVENTURES","image":"20221123/11c41cfbe3e9f892e149b7715a0d9200.webp","button_text":"Shop Now","button_link":"#"}]',
            ],
            42 => [
                'id' => 89,
                'component_id' => 17,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":""}',
            ],
            43 => [
                'id' => 100,
                'component_id' => 18,
                'name' => 'title',
                'type' => 'string',
                'value' => 'TOP BRANDS',
            ],
            44 => [
                'id' => 101,
                'component_id' => 18,
                'name' => 'brand_type',
                'type' => 'string',
                'value' => 'selectedBrands',
            ],
            45 => [
                'id' => 102,
                'component_id' => 18,
                'name' => 'brand_limit',
                'type' => 'string',
                'value' => '9',
            ],
            46 => [
                'id' => 103,
                'component_id' => 19,
                'name' => 'sidebox',
                'type' => 'array',
                'value' => '{"title":"New Here?","sidetext":"Get Coupon","description":"Use coupon <span class=\\"primary-text-color font-medium\\">\\u2018BUYNOW01\\u2019<\\/span> and get up to $200 on your first purchase."}',
            ],
            47 => [
                'id' => 105,
                'component_id' => 19,
                'name' => 'sidebox_show',
                'type' => 'string',
                'value' => '1',
            ],
            48 => [
                'id' => 106,
                'component_id' => 19,
                'name' => 'iconbox',
                'type' => 'array',
                'value' => '[{"image":"20220912/80a6e899c44b684664e32cbc47082f60.webp","title":"Free Shipping Worldwide","subtitle":"For all orders over $350"},{"image":"20220912/7fb4c55cfbf6fbaebeb7f3fcde4536c0.webp","title":"Secured Online Payment","subtitle":"Payment protection guaranteed"},{"image":"20220912/857c4980e5995df0ff3cbddab4a76ef0.webp","title":"Money Back Guarantee","subtitle":"If goods have problems"}]',
            ],
            49 => [
                'id' => 113,
                'component_id' => 3,
                'name' => 'row',
                'type' => 'string',
                'value' => '2',
            ],
            50 => [
                'id' => 114,
                'component_id' => 3,
                'name' => 'column',
                'type' => 'string',
                'value' => '4',
            ],
            51 => [
                'id' => 125,
                'component_id' => 4,
                'name' => 'row',
                'type' => 'string',
                'value' => '2',
            ],
            52 => [
                'id' => 126,
                'component_id' => 4,
                'name' => 'column',
                'type' => 'string',
                'value' => '4',
            ],
            53 => [
                'id' => 144,
                'component_id' => 16,
                'name' => 'row',
                'type' => 'string',
                'value' => '3',
            ],
            54 => [
                'id' => 145,
                'component_id' => 16,
                'name' => 'column',
                'type' => 'string',
                'value' => '5',
            ],
            55 => [
                'id' => 149,
                'component_id' => 17,
                'name' => 'row',
                'type' => 'string',
                'value' => '2',
            ],
            56 => [
                'id' => 150,
                'component_id' => 17,
                'name' => 'column',
                'type' => 'string',
                'value' => '3',
            ],
            57 => [
                'id' => 1482,
                'component_id' => 3,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            58 => [
                'id' => 1483,
                'component_id' => 3,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            59 => [
                'id' => 1484,
                'component_id' => 3,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '241',
            ],
            60 => [
                'id' => 1497,
                'component_id' => 17,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            61 => [
                'id' => 1498,
                'component_id' => 17,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            62 => [
                'id' => 1499,
                'component_id' => 17,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '210',
            ],

            63 => [
                'id' => 1740,
                'component_id' => 2,
                'name' => 'row',
                'type' => 'string',
                'value' => '1',
            ],
            64 => [
                'id' => 1741,
                'component_id' => 2,
                'name' => 'column',
                'type' => 'string',
                'value' => '7',
            ],
            65 => [
                'id' => 1742,
                'component_id' => 2,
                'name' => 'max',
                'type' => 'string',
                'value' => '7',
            ],
            66 => [
                'id' => 1743,
                'component_id' => 2,
                'name' => 'full',
                'type' => 'string',
                'value' => '0',
            ],
            67 => [
                'id' => 1744,
                'component_id' => 2,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            68 => [
                'id' => 1745,
                'component_id' => 2,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            69 => [
                'id' => 1782,
                'component_id' => 4,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            70 => [
                'id' => 1783,
                'component_id' => 4,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            71 => [
                'id' => 1784,
                'component_id' => 4,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '171',
            ],
            72 => [
                'id' => 1797,
                'component_id' => 16,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            73 => [
                'id' => 1798,
                'component_id' => 16,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            74 => [
                'id' => 1799,
                'component_id' => 16,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '',
            ],

            75 => [
                'id' => 2283,
                'component_id' => 95,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Electronics',
            ],
            76 => [
                'id' => 2284,
                'component_id' => 95,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '1',
            ],
            77 => [
                'id' => 2285,
                'component_id' => 95,
                'name' => 'more_link',
                'type' => 'string',
                'value' => 'https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices',
            ],
            78 => [
                'id' => 2286,
                'component_id' => 95,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => 'slide',
            ],
            79 => [
                'id' => 2287,
                'component_id' => 95,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'right',
            ],
            80 => [
                'id' => 2288,
                'component_id' => 95,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'queryProducts',
            ],
            81 => [
                'id' => 2289,
                'component_id' => 95,
                'name' => 'row',
                'type' => 'string',
                'value' => '2',
            ],
            82 => [
                'id' => 2290,
                'component_id' => 95,
                'name' => 'column',
                'type' => 'string',
                'value' => '4',
            ],
            83 => [
                'id' => 2291,
                'component_id' => 95,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '8',
            ],
            84 => [
                'id' => 2292,
                'component_id' => 95,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            85 => [
                'id' => 2293,
                'component_id' => 95,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            86 => [
                'id' => 2294,
                'component_id' => 95,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '',
            ],
            87 => [
                'id' => 2295,
                'component_id' => 95,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"<span style=\\"color: #000;\\">Visit<\\/span>","l_subtitle":"Electronic","title":"Accessories","image":"20221205/cba5deddcae3205d94259425a9ff5bbe.webp","button":"Shop Now","link":"https://demo.martvill.techvill.net/search-products?categories=Electronic%20Devices"}',
            ],
            88 => [
                'id' => 2296,
                'component_id' => 95,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"","l_subtitle":"","title":"","button_text":"","button_link":""}]',
            ],
            89 => [
                'id' => 2297,
                'component_id' => 95,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":""}',
            ],
            90 => [
                'id' => 2298,
                'component_id' => 95,
                'name' => 'query',
                'type' => 'array',
                'value' => '[{"type":"where","column":"tag","operation":"in","value":["73"]}]',
            ],
            91 => [
                'id' => 2299,
                'component_id' => 19,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            92 => [
                'id' => 2300,
                'component_id' => 19,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            93 => [
                'id' => 2301,
                'component_id' => 19,
                'name' => 'rounded',
                'type' => 'string',
                'value' => '0',
            ],
            94 => [
                'id' => 2360,
                'component_id' => 6,
                'name' => 'full',
                'type' => 'string',
                'value' => '0',
            ],
            95 => [
                'id' => 2361,
                'component_id' => 6,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            96 => [
                'id' => 2362,
                'component_id' => 6,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            97 => [
                'id' => 2363,
                'component_id' => 6,
                'name' => 'height',
                'type' => 'string',
                'value' => '270',
            ],
            98 => [
                'id' => 2364,
                'component_id' => 6,
                'name' => 'rounded',
                'type' => 'string',
                'value' => '0',
            ],
            99 => [
                'id' => 2365,
                'component_id' => 6,
                'name' => 'full_link',
                'type' => 'string',
                'value' => '0',
            ],
            100 => [
                'id' => 2372,
                'component_id' => 15,
                'name' => 'full',
                'type' => 'string',
                'value' => '0',
            ],
            101 => [
                'id' => 2373,
                'component_id' => 15,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            102 => [
                'id' => 2374,
                'component_id' => 15,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            103 => [
                'id' => 2375,
                'component_id' => 15,
                'name' => 'height',
                'type' => 'string',
                'value' => '',
            ],
            104 => [
                'id' => 2376,
                'component_id' => 15,
                'name' => 'rounded',
                'type' => 'string',
                'value' => '0',
            ],
            105 => [
                'id' => 2377,
                'component_id' => 15,
                'name' => 'full_link',
                'type' => 'string',
                'value' => '0',
            ],
            106 => [
                'id' => 2402,
                'component_id' => 18,
                'name' => 'mt',
                'type' => 'string',
                'value' => '',
            ],
            107 => [
                'id' => 2403,
                'component_id' => 18,
                'name' => 'mb',
                'type' => 'string',
                'value' => '',
            ],
            108 => [
                'id' => 2439,
                'component_id' => 96,
                'name' => 'title',
                'type' => 'string',
                'value' => 'Fashions',
            ],
            109 => [
                'id' => 2440,
                'component_id' => 96,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '1',
            ],
            110 => [
                'id' => 2441,
                'component_id' => 96,
                'name' => 'more_link',
                'type' => 'string',
                'value' => 'https://demo.martvill.techvill.net/search-products?categories=Fashion',
            ],
            111 => [
                'id' => 2442,
                'component_id' => 96,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => 'slide',
            ],
            112 => [
                'id' => 2443,
                'component_id' => 96,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'left',
            ],
            113 => [
                'id' => 2444,
                'component_id' => 96,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'queryProducts',
            ],
            114 => [
                'id' => 2445,
                'component_id' => 96,
                'name' => 'row',
                'type' => 'string',
                'value' => '2',
            ],
            115 => [
                'id' => 2446,
                'component_id' => 96,
                'name' => 'column',
                'type' => 'string',
                'value' => '4',
            ],
            116 => [
                'id' => 2447,
                'component_id' => 96,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '8',
            ],
            117 => [
                'id' => 2448,
                'component_id' => 96,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            118 => [
                'id' => 2449,
                'component_id' => 96,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            119 => [
                'id' => 2450,
                'component_id' => 96,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '252',
            ],
            120 => [
                'id' => 2451,
                'component_id' => 96,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"<span style=\\"margin-top: 400px; display: block;\\">SALES<\\/span>","l_subtitle":"DISCOUNT UP TO","title":"50% OFF","image":"20221120\\/8dbc149374c1046c5177438df2a021c7.webp","button":"Shop Now","link":"https://demo.martvill.techvill.net/search-products?categories=Fashion"}',
            ],
            121 => [
                'id' => 2452,
                'component_id' => 96,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"","l_subtitle":"","title":"","button_text":"","button_link":""}]',
            ],
            122 => [
                'id' => 2453,
                'component_id' => 96,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":""}',
            ],
            123 => [
                'id' => 2454,
                'component_id' => 96,
                'name' => 'query',
                'type' => 'array',
                'value' => '[{"type":"where","column":"tag","operation":"in","value":["71"]}]',
            ],
            124 => [
                'id' => 2675,
                'component_id' => 17,
                'name' => 'query',
                'type' => 'array',
                'value' => '[{"type":"where","column":"tag","operation":"in","value":["55"]}]',
            ],
            125 => [
                'id' => 2691,
                'component_id' => 18,
                'name' => 'brands',
                'type' => 'array',
                'value' => '["14","2","3","16","18","21","23","29","31"]',
            ],
            126 => [
                'id' => 2692,
                'component_id' => 97,
                'name' => 'cta',
                'type' => 'array',
                'value' => '[{"upper_st":"<span style=\\"color: #fff\\">MOBILE<\\/span>","lower_st":"<span style=\\"color: #fff\\">CUSTOMIZED<\\/span>","title":"<span style=\\"color: #fff\\">IOS APPS<\\/span>","image":"20221127\\/ae16685af1c819def9c014d01a6b3b91.webp","btn_text":"","btn_link":""},{"upper_st":"<span style=\\"color: #fff\\">DESIGN<\\/span>","lower_st":"<span style=\\"color: #fff\\">DECORATE YOUR <\\/span>","title":"<span style=\\"color: #fff\\">SYSTEM<\\/span>","image":"20221127\\/490cad1f920ffcb3f6bb097224231d30.webp","btn_text":"","btn_link":""},{"upper_st":"<span style=\\"color: #fff\\">AWARDS<\\/span>","lower_st":"<span style=\\"color: #fff\\">HEART WINNING <\\/span>","title":"<span style=\\"color: #fff\\">PRODUCTS<\\/span>","image":"20221127\\/763ba674d3346b48c4f308c6413bdf39.webp","btn_text":"","btn_link":""}]',
            ],
            127 => [
                'id' => 2693,
                'component_id' => 97,
                'name' => 'full',
                'type' => 'string',
                'value' => '0',
            ],
            128 => [
                'id' => 2694,
                'component_id' => 97,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            129 => [
                'id' => 2695,
                'component_id' => 97,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            130 => [
                'id' => 2696,
                'component_id' => 97,
                'name' => 'height',
                'type' => 'string',
                'value' => '284',
            ],
            131 => [
                'id' => 2697,
                'component_id' => 97,
                'name' => 'rounded',
                'type' => 'string',
                'value' => '1',
            ],
            132 => [
                'id' => 2698,
                'component_id' => 97,
                'name' => 'full_link',
                'type' => 'string',
                'value' => '0',
            ],
            133 => [
                'id' => 2832,
                'component_id' => 98,
                'name' => 'title',
                'type' => 'string',
                'value' => 'DIGITAL PRODUCTS',
            ],
            134 => [
                'id' => 2833,
                'component_id' => 98,
                'name' => 'see_more',
                'type' => 'string',
                'value' => '1',
            ],
            135 => [
                'id' => 2834,
                'component_id' => 98,
                'name' => 'more_link',
                'type' => 'string',
                'value' => 'https://demo.martvill.techvill.net/search-products?categories=Digital%20Product',
            ],
            136 => [
                'id' => 2835,
                'component_id' => 98,
                'name' => 'sidebar',
                'type' => 'string',
                'value' => '0',
            ],
            137 => [
                'id' => 2836,
                'component_id' => 98,
                'name' => 'sidebar_position',
                'type' => 'string',
                'value' => 'left',
            ],
            138 => [
                'id' => 2837,
                'component_id' => 98,
                'name' => 'showcase_type',
                'type' => 'string',
                'value' => 'queryProducts',
            ],
            139 => [
                'id' => 2838,
                'component_id' => 98,
                'name' => 'row',
                'type' => 'string',
                'value' => '1',
            ],
            140 => [
                'id' => 2839,
                'component_id' => 98,
                'name' => 'column',
                'type' => 'string',
                'value' => '2',
            ],
            141 => [
                'id' => 2840,
                'component_id' => 98,
                'name' => 'total_products',
                'type' => 'string',
                'value' => '2',
            ],
            142 => [
                'id' => 2841,
                'component_id' => 98,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            143 => [
                'id' => 2842,
                'component_id' => 98,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
            144 => [
                'id' => 2843,
                'component_id' => 98,
                'name' => 'card_height',
                'type' => 'string',
                'value' => '360',
            ],
            145 => [
                'id' => 2844,
                'component_id' => 98,
                'name' => 'slide',
                'type' => 'array',
                'value' => '{"u_subtitle":"","l_subtitle":"","title":"","button":"","link":""}',
            ],
            146 => [
                'id' => 2845,
                'component_id' => 98,
                'name' => 'slider',
                'type' => 'array',
                'value' => '[{"u_subtitle":"","l_subtitle":"","title":"","button_text":"","button_link":""}]',
            ],
            147 => [
                'id' => 2846,
                'component_id' => 98,
                'name' => 'flash',
                'type' => 'array',
                'value' => '{"badge_text":""}',
            ],
            148 => [
                'id' => 2847,
                'component_id' => 98,
                'name' => 'query',
                'type' => 'array',
                'value' => '[{"type":"where","column":"tag","operation":"in","value":["70"]}]',
            ],
            149 => [
                'id' => 2997,
                'component_id' => 99,
                'name' => 'title',
                'type' => 'string',
                'value' => 'latest from our blogs',
            ],
            150 => [
                'id' => 2998,
                'component_id' => 99,
                'name' => 'blog_type',
                'type' => 'string',
                'value' => 'latestBlogs',
            ],
            151 => [
                'id' => 2999,
                'component_id' => 99,
                'name' => 'blog_limit',
                'type' => 'string',
                'value' => '3',
            ],
            152 => [
                'id' => 3000,
                'component_id' => 99,
                'name' => 'mt',
                'type' => 'string',
                'value' => '100px',
            ],
            153 => [
                'id' => 3001,
                'component_id' => 99,
                'name' => 'mb',
                'type' => 'string',
                'value' => '0px',
            ],
        ];

        $replaceFrom = [
            'https:\\/\\/demo.martvill.techvill.net\\',
            'https://demo.martvill.techvill.net',
        ];

        $replaceTo = url('/');

        array_walk_recursive($data, function (&$value) use ($replaceFrom, $replaceTo) {
            $value = str_replace($replaceFrom, $replaceTo, $value);
        });

        \DB::table('component_properties')->delete();

        \DB::table('component_properties')->insert($data);

    }
}
