import React, { useState, useEffect } from 'react';
import './Privacy.css';
import Header from '../Nainital/Header';
import Footer from '../Components/Footer/Footer';
import Destination from '../Components/Destinations/Destination';
import { useStateValue } from '../StateProvider';
import { useHistory,useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function Privacy() {
  const history = useHistory();
  const location = useLocation();
  const [{ All_Treks }, dispatch] = useStateValue();

  const goToPage = (loc) => {
    history.push(`/${loc}`);
  };

  useEffect(() => {
    console.log("location:",location.state?.page_loc)
    window.scrollTo(0, 0);
    if (location.state && location.state.page_loc) {
        window.scrollTo({
            top: location.state.page_loc,
            behavior: 'smooth',
        });
    }
    else {
        window.scrollTo(0, 0);
    }
}, [location])
  return (
    <div className='Privacy'>
      <Header />
      <div className="aboutUs__body">
        <img className='aboutUs__body_img' src="/Images/aboutus-bg.png" alt="" />
        <div className='Name_on_img'>Legal Policies</div>
        <div className="aboutUs__body_first">
          <div className="smallHeader">
            <div onClick={() => goToPage("")} className="header_name">
              Home
              {" >"}
            </div>
            <div className="header_name active">
              Privacy
            </div>
          </div>
        </div>

        <div className='aboutUs__body_second'>
          <div className='aboutUs__body_secondIn'>
            <div className='aboutUs__div_left'></div>
            <div className='aboutUs__div_right'>
              <div className='aboutUs__header'>
                <p className='aboutUs__header_1'>Privacy Policy</p>
                <p className='aboutUs__header_2'>Effective Date: June 9, 2023</p>
              </div>
              <div className='aboutUs__body_container'>
                <p>At Thrillozeal, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website (www.thrillozeal.com) and use our services. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Confirmation Policy</h4>
                <br/>
                <br/>
                <p>
                As soon as the payment is made, a confirmation email would be sent to your provided email id. The payment receipt will be attached with the mail.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Payment Terms</h4>
                <p>
                Payment can be made through UPI, Net-banking, Account Transfer, Credit & Debit cards.<br/>
Cash payment is not available.<br/>
100% payment is to be made 48 hours before the trip start date.<br/>
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Cancellation Policy</h4>
                <p>If cancellation is made 72 hours before the tour date, a 100% refund would be processed.<br/>
If cancellation is made 48 hours before the tour date, 50% refund would be processed.<br/>
A refund would not be processed if a cancellation is made at the last moment, or one day before the tour.<br/>
Cancellation should be timely informed so that the compensation and other formalities can be managed properly.<br/>
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Refund Policy</h4>
                <br/>
                <br/>
                <p>The refund would be processed within 10 business days.</p>
                <br/>
                <br/>
                <br/>
                <h4 className='aboutUs__header_3'>Information We Collect:</h4>
                <br/>
                <br/>
                <p>1.1 Personal Information:</p><br /><p>
                  We may collect personal information such as your name, email address, phone number, and other information you provide when you register an account, make a booking, or interact with our website.
                </p>
                <br />
                <br />
                <p>
                  1.2 Log Data:</p><br /><p>
                  When you visit our website, our servers automatically collect certain information, including your IP address, browser type, referring/exit pages, and timestamps. This information is used to analyze trends, administer the site, track user movement, and gather demographic information.
                </p>
                <br />
                <br />
                <p>
                  1.3 Cookies and Similar Technologies:</p><br /><p>
                  We may use cookies, web beacons, and similar technologies to enhance your browsing experience, personalize content, and collect information about how you use our website. You have the option to disable cookies through your browser settings, but this may limit certain functionalities.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Use of Information:</h4>
                <br />
                <p>
                  2.1 Providing Services:</p><br /><p>
                  We use your personal information to provide and personalize our services, process your bookings, communicate with you, and improve our website's functionality and user experience.
                </p>
                <br />
                <br />
                <p>
                  2.2 Marketing and Communications:</p><br /><p>
                  With your consent, we may send you promotional emails, newsletters, or other communications regarding our services, special offers, and relevant information. You can opt-out of receiving these communications at any time.
                </p>
                <br />
                <br />
                <p>
                  2.3 Aggregated Data:</p><br /><p>
                  We may anonymize and aggregate the information we collect to generate statistical or other aggregated data for various purposes, including analyzing trends, improving our services, and marketing activities. This aggregated data does not identify any individual.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Data Sharing and Disclosure:</h4>
                <br />
                <p>
                  3.1 Service Providers:</p><br /><p>
                  We may share your personal information with trusted third-party service providers who assist us in operating our website, processing payments, analyzing data, or providing other support services. These service providers are obligated to keep your information confidential and use it only for the purposes specified by us.
                </p>
                <br />
                <br />
                <p>
                  3.2 Legal Compliance:</p><br /><p>
                  We may disclose your personal information if required to do so by law or if we believe that such action is necessary to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.
                </p>
                <br />
                <br />
                <p>
                  3.3 Business Transfers:</p><br /><p>
                  In the event of a merger, acquisition, or sale of our business, your personal information may be transferred as part of the transaction. We will notify you via email or prominent notice on our website about any change in ownership or the use of your personal information.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>
                  Data Security:
                </h4>
                <br />
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Children's Privacy:</h4>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected personal information from a child, please contact us immediately, and we will take steps to remove that information from our systems.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Third-Party Links:</h4>
                <br /><p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of those third-party websites before providing any personal information.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Changes to this Privacy Policy:</h4><br /><p>
                  We reserve the right to update or modify this Privacy Policy at any time without prior notice. The revised Privacy Policy will be effective as of the updated date mentioned at the beginning of the policy. We recommend that you review this Privacy Policy periodically to stay informed about our information practices.
                </p>
                <br />
                <br />
                <br />
                <h4 className='aboutUs__header_3'>Contact Us:</h4><br /><p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at <span className='aboutUs__header_3'>info@thrillozeal.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Destination trendingTreks={All_Treks.filter((trek) => {
        return trek.trek_data.packagetype === "Trending";
      })} />
      <Footer />
    </div>

  )
}

export default Privacy
