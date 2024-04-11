@extends('vendor.layouts.app')
@section('page_title', __('Dashboard'))
@section('css')
    <link rel="stylesheet" href="{{ asset('public/datta-able/plugins/gridstack/css/gridstack.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/datta-able/css/pages/gridstack.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/datta-able/fonts/material/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/dist/plugins/Responsive-2.2.5/css/responsive.dataTables.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/dist/plugins/bootstrap-daterangepicker/daterangepicker.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/dist/css/custom.min.css') }}">
@endsection

@section('content')
    <div class="row">
        @include('admin.dashboxes.widget-option', ['route' => route('vendor.dashboard.forget_widget')])
        <!-- Main content -->
        <div class="dashboard grid-stack mb-20p p-0" data-gs-width="12" data-gs-animate="yes" id="vendor_dashboard_container">
            {{-- Wallet --}}
            @if (isset($widget['wallet']))
            @foreach ($walletBalances as $wallet)
                @continue(isset($widget['wallet']['visibility']) ? !$widget['wallet']['visibility'] : false)
                @php
                    $widget['wallet']['gs'] = array_merge(['x' => 0, 'y' => 17, 'width' => 4, 'height' => 1], $widget['wallet']['gs'] ?? []);
                @endphp
                <div class="grid-stack-item" data-gs-id="wallet" 
                    data-gs-x="{{ $widget['wallet']['gs']['x'] }}" 
                    data-gs-y="{{ $widget['wallet']['gs']['y'] }}" 
                    data-gs-width="{{ $widget['wallet']['gs']['width'] }}" 
                    data-gs-height="{{ $widget['wallet']['gs']['height'] }}">
                    <div class="grid-stack-item-content">
                        <i class="grid-icon fas fa-arrows-alt"></i>
                        <div class="w-100 h-100">
                            @if (is_callable($widget['wallet']['content']))
                                {!! $widget['wallet']['content']() !!}
                            @else
                                @includeIf($widget['wallet']['content'])
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
            @endif

            @foreach ($widget as $key => $item)
                @continue($key == 'wallet')
                @continue(isset($item['visibility']) ? !$item['visibility'] : false)
                @php
                    $item['gs'] = array_merge(['x' => 0, 'y' => 40, 'width' => 4, 'height' => 1], $item['gs'] ?? []);
                @endphp
                <div class="grid-stack-item" data-gs-id="{{ $key }}" 
                    @foreach ($item['gs'] as $k => $v)
                        {{ 'data-gs-' . $k . '=' . $v }}
                    @endforeach
                    >
                    <div class="grid-stack-item-content">
                        <i class="grid-icon fas fa-arrows-alt"></i>
                        <div class="w-100 h-100">
                            @if (is_callable($item['content']))
                                {!! $item['content']() !!}
                            @else
                                @includeIf($item['content'])
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
@section('js')
    <script>
        'use strict';
        const localeString = "{{ app()->getLocale() }}";
        const mostSoldProductsUrl = "{{ route('vendor.dashboard.most-sold-products') }}";
        const mostActiveUsersUrl = "{{ route('vendor.dashboard.most-active-users') }}";
        const vendorStatsUrl = "{{ route('vendor.dashboard.vendor-stats') }}";
        const salesOfThisMonth = "{{ route('vendor.dashboard.sales-of-this-month') }}";
        const vendorEdiUrl = "{{ route('vendors.edit', ['id' => '__id__']) }}";
        
        const dashboardCacheWidgetElement = @json($dashboardWidgetElement);
        const dashboardCacheWidgetOption = @json($dashboardWidgetOption);
        const widgetOptions = @json(config('martvill.widget_options'));
    </script>
    
    <script src="{{ asset('public/dist/plugins/jQueryUI/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('public/datta-able/plugins/gridstack/js/lodash.min.js') }}"></script>
    <script src="{{ asset('public/dist/plugins/jQueryUI/jquery.ui.touch-punch.min.js') }}"></script>
    <script src="{{ asset('public/datta-able/plugins/gridstack/js/gridstack.min.js') }}"></script>
    <script src="{{ asset('public/datta-able/plugins/gridstack/js/gridstack.jQueryUI.min.js') }}"></script>

    <script src="{{ asset('public/dist/plugins/DataTables-1.10.21/js/jquery.dataTablesCus.min.js') }}"></script>
    <script src="{{ asset('public/dist/plugins/Responsive-2.2.5/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/moment.min.js') }}"></script>
    <script src="{{ asset('public/dist/plugins/bootstrap-daterangepicker/daterangepicker.min.js') }}"></script>
    <script src="{{ asset('public/datta-able/plugins/chart-chartjs/js/Chart-2019.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/dashboard.min.js') }}"></script>
@endsection
