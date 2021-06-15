import React from 'react'
import './payment.css'

const payment = () => {
    return (
        <div className="payment">
            <div className='important-links'>
                <div className="payment-methods">
                    <div className='payments-heading'>We accept payments using:</div>
                    <img className='payment-img' src='/images/visa-5604.png' alt='' height='auto' width='auto' />
                    <img className='payment-img' src='/images/paypal-5603.png' height='auto' width='auto' alt='' />
                    <img className='payment-img' src='/images/upi-5602.png' alt='' height='auto' width='auto' />
                    <img className='payment-img' src='/images/no-cost-emi-5601.png' alt='' height='auto' width='auto' />
                </div>
                <div className='payment-methods second'>
                    <img className='payment-img' src='/images/payment.png' alt='' height='auto' width='auto' />
                    <img className='payment-img' src='/images/encryp-5599.png' alt='' height='auto' width='auto' />
                    <img className='payment-img' src='/images/razorpay-5598.png' alt='' height='auto' width='auto' />
                </div>
            </div>

        </div>
    )
}

export default payment;