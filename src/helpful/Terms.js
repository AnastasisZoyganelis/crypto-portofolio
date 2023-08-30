import React from 'react';
import './Terms.css'; // Import the CSS file for styling
import Navigation from './navigation';

const Terms = () => {
  return (
    <div>
        <Navigation/>
      <ul className='terms-list'>
        <li className='terms-list-item'>
          <strong>Disclaimer about Financial Advice:</strong> Our website does not provide financial advice, and all information provided is for informational purposes only. Users should not interpret any content on this website as financial or investment advice.
        </li>
        <li className='terms-list-item'>
          <strong>Data Usage and Privacy:</strong> We respect the privacy of our users and commit to never use their data against them or for any malicious purposes. User data, including personal information and transaction history, is treated with the utmost confidentiality and will not be shared with third parties without explicit user consent, except as required by law. All sensitive user data is securely hashed and stored to protect user privacy.
        </li>
        <li className='terms-list-item'>
          <strong>Authority to Email Users:</strong> By using our website, users grant us the authority to send them email communications related to their account, updates, news, and other relevant information. Users can opt out of these communications at any time through their account settings.
        </li>
        <li className='terms-list-item'>
          <strong>Security Measures:</strong> We implement stringent security measures to protect user data and ensure the security of our platform. Users are encouraged to maintain strong, unique passwords for their accounts and enable two-factor authentication (2FA) for added security.
        </li>
        <li className='terms-list-item'>
          <strong>User Responsibility:</strong> Users are responsible for their own financial decisions and should conduct their own research and due diligence before making any investment or financial transaction. Users are responsible for keeping their login credentials, private keys, and account information secure.
        </li>
        <li className='terms-list-item'>
          <strong>Compliance with Laws:</strong> Users are expected to comply with all applicable laws and regulations related to cryptocurrencies and financial transactions in their jurisdiction.
        </li>
        <li className='terms-list-item'>
          <strong>Limitation of Liability:</strong> We are not liable for any financial losses or damages incurred by users as a result of using our platform or following information provided on our website.
        </li>
        <li className='terms-list-item'>
          <strong>Changes to Terms and Policies:</strong> We reserve the right to update our terms of use and privacy policy as needed. Users will be notified of any changes, and continued use of the website implies acceptance of the updated terms.
        </li>
        <li className='terms-list-item'>
          <strong>Contact Information:</strong> Users can contact us for questions or concerns regarding these terms and our policies.
        </li>
        <li className='terms-list-item'>
          <strong>Email Communications:</strong> By using our website, you grant us the authority to send you email communications. These communications may include, but are not limited to, the following types of emails:
          <ul>
            <li>Account-related notifications, such as password resets, account verifications, and updates.</li>
            <li>Transactional emails, which provide information about cryptocurrency transactions or account activity.</li>
            <li>Newsletters, updates, and promotional emails containing information about our services, industry news, and special offers.</li>
            <li>Important service announcements and alerts related to security or changes in our terms and policies.</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Terms;


