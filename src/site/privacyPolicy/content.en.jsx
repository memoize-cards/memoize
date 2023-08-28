import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'

function component () {
  return (
    <stack.Article column>
      <text.H1 master dark highlight md bold>Privacy Policy</text.H1>
      <text.P master xxs>
       This Privacy Policy outlines how Memoize ("we," "our," or "us") collects, uses, and safeguards your personal information when you use the Memoize application (the "App"). We are committed to protecting your privacy and ensuring the security of your personal data. By using the App, you consent to the practices described in this Privacy Policy.
      </text.P>
      <text.H2 master dark highlight xs bold>Information We Collect</text.H2>
      <text.P master xxs>
        We may collect various types of personal information from you, including but not limited to your name, email address, and usage data when you use the App.
      </text.P>
      <text.H2 master dark highlight xs bold>How We Use Your Information</text.H2>
      <text.P master xxs>
        We use the collected information to provide and improve the App's functionality and user experience, including personalizing your learning experience and providing feedback. We may also use your information for communication purposes, to send important updates, announcements, and promotional content related to the App.
      </text.P>
      <text.H2 master dark highlight xs bold>Data Security</text.H2>
      <text.P master xxs>
        We implement security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no method of data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your data.
      </text.P>
      <text.H2 master dark highlight xs bold>Third-Party Services</text.H2>
      <text.P master xxs>
        We may use third-party services to assist us in operating the App and may share your information with them for those purposes. These third-party services are subject to their own privacy policies, and we encourage you to review their policies before using the App.
      </text.P>
      <text.H2 master dark highlight xs bold>Data Retention</text.H2>
      <text.P master xxs>
        We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
      </text.P>
      <text.H2 master dark highlight xs bold>Your Rights</text.H2>
      <text.P master xxs>
        You have the right to access, correct, update, or delete your personal information stored by us. You may also choose to withdraw your consent for certain processing activities.
      </text.P>
      <text.H2 master dark highlight xs bold>Children's Privacy</text.H2>
      <text.P master xxs>
        The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without appropriate parental consent, we will take steps to delete the information.
      </text.P>
      <text.H2 master dark highlight xs bold>Changes to Privacy Policy</text.H2>
      <text.P master xxs>
        We may update this Privacy Policy to reflect changes in our practices. It is your responsibility to review this page periodically for any changes.
      </text.P>
      <text.P master xxs>
        By using the Memoize App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this Privacy Policy, please do not use the App.
      </text.P>
      <text.P master xxs>
        If you have any questions about this Privacy Policy, please contact us at <text.A href='mailtocleber.engineer@gmail.com' primary xxs medium>cleger.engineer@gmail.com</text.A>.
      </text.P>
      <text.P master xxs>
        Last updated August 18, 2023.
      </text.P>
    </stack.Article>
  )
}

export default component
