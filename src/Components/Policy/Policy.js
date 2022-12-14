import React from 'react'
import './Policy.css'
const Policy = () => {
  return (
    <div  className="policy-wrapper">


        <div className="policy-container">
            <div className="confirm">
            <p>Confirmation Policy</p>
            <p>As soon as the payment is made, a confirmation email would be sent to your provided email id. The payment receipt will be attached with the mail.</p></div>

            <div>
                <p>Payment Terms</p>
                 <ul>
                     <li>Payment can be made through UPI, Net-banking, Account Transfer, Credit &amp; Debit cards.</li>
                     <li>Cash payment is not available.</li>
                     <li>100% payment is to be made 48 hours before the trip start date.</li>
                 </ul>
            </div>

            <div>
                <p>Cancellation Policy</p>
                <ul>
                    <li>If cancellation is made 72 hours before the tour date, a 100% refund would be processed.</li>
                    <li>Id cancellation is made 48 hours before the tour date, 50% refund would be processed.</li>
                    <li>A refund would not be processed if a cancellation is made at the last moment, or one day before the tour.</li>
                    <li>Cancellation should be timely informed so that the compensation and other formalities can be managed properly.
</li>

                </ul>
            </div>

            <div className="refund">
                <p>Refund Policy</p>
                <p>The refund would be processed within 10 business days.</p>
            </div>
        </div>

    </div>
  )
}

export default Policy