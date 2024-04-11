<div class="card card-width">
    <div class="card-header">
        <div class="d-flex flex-md-row flex-column justify-content-md-between">
            <h6 class="order-details-text text-uppercase">{{ __('Order Details') }}</h6>
            <div>
                <span class="order-number">{{ __('Reference') }}</span>
                <h6 class="order-reference"><span>#{{ $order->reference }}</span></h6>
            </div>
        </div>
        <div class="order-details-body">
            <div>
                <div class="status-dropdown col-md-3 mb-4">
                    <p>{{ __('Payment Status') }}</p>
                    <span class="font-bold">{{ $order->payment_status }}</span>
                </div>

                @if(optional($order->paymentMethod)->gateway != null)
                    <p class="payment-method">{{ __('Payment Method') }} <span class="order-detail-payment-gap">:</span> <span class="payment-type">{{ paymentRenamed(optional($order->paymentMethod)->gateway) }}</span></p>
                @endif
                @if($order->paid > 0 && !empty(optional($order->transaction)->transaction_date))
                    <p class="paid-on">{{ __('Paid On') }} <span class="order-detail-paid-gap">:</span> <span class="payment-date">{{ formatDate(optional($order->transaction)->transaction_date) }}</span> @if(!empty($order->TransactionId($order->id)))<a href="{{ route('transaction.edit', $order->TransactionId($order->id)) }}">({{ __('View Transaction') }})</a>@endif</p>
                @endif

                <div class="d-md-flex gbs-section">
                    <div class="general-section">
                        <p class="text-uppercase general">{{ __('General') }}</p>
                        <div>
                            <div class="status-dropdown mb-3">
                                <p>{{ __('Status') }}</p>
                                 <span>{{ $order->orderStatus->name }}</span>
                            </div>
                            <p>{{ __('Order Date') }}</p>

                            <div class="my-2">
                                <span class="font-bold">{{ $order->order_date }}</span>
                            </div>

                            <div class="customer-dropdown">
                                <p>{{ __('Customers') }}</p>
                                <span class="font-bold">{{ optional($order->user)->name ?? __('Guest') }}</span>

                            </div>
                        </div>
                    </div>

                    @php
                        $shippingAddress = $order->getShippingAddress();
                        $billingAddress = $order->getBillingAddress();
                    @endphp
                    <div class="billing-section">
                        <div class="billing-icon-container text-uppercase">
                            <p class="billing">{{ __('Billing Address') }}</p>
                        </div>
                        <div class="billing-information-container">
                            <p class="billing-information"> {{ __('Name') }}: <span> {{ $billingAddress->first_name }} {{ $billingAddress->last_name }}</span> </p>
                            <p class="billing-information"> {{ __('Email') }}: <span> {{ $billingAddress->email }} </span> </p>
                            <p class="billing-information"> {{ __('Phone') }}: <span> {{ $billingAddress->phone }} </span> </p>
                            <p class="billing-information"> {{ __('Address') }}: <span> {{ $billingAddress->address_1 }} {{ !empty($billingAddress->address_2) ? ", " . $billingAddress->address_2 : '' }}, {{ $billingAddress->city }} </span> </p>
                            <p class="billing-information"> {{ __('Postcode') . "/" . __('ZIP') }}: <span> {{ $billingAddress->zip }} </span> </p>
                            <p class="billing-information"> {{ __('State') }}: <span> {{ $billingAddress->state }} </span> </p>
                            <p class="billing-information"> {{ __('Country') }}: <span> {{ $billingAddress->country }} </span> </p>
                        </div>
                    </div>

                    <div class="shipping-section">
                        <div class="shipping-icon-container text-uppercase">
                            <p class="shipping">{{ __('Shipping Address') }}</p>
                        </div>

                        <div class="billing-information-container">
                            <p class="billing-information"> {{ __('Name') }}: <span> {{ $shippingAddress->first_name . " " . $shippingAddress->last_name }} </span> </p>
                            <p class="billing-information"> {{ __('Address') }}: <span> {{ $shippingAddress->address_1 }} {{ !empty($shippingAddress->address_2) ? ", " . $shippingAddress->address_2 : '' }}, {{ $shippingAddress->city }} </span> </p>
                            <p class="billing-information"> {{ __('Postcode') . "/" . __('ZIP') }}: <span> {{ $shippingAddress->zip }} </span> </p>
                            <p class="billing-information"> {{ __('State') }}: <span> {{ $shippingAddress->state }} </span> </p>
                            <p class="billing-information"> {{ __('Country') }}: <span> {{ $shippingAddress->country }} </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>