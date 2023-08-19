import { urlFor } from '@standard/router'
import h from '@standard/h'
import HistoryBack from '@components/historyBack'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <stack.Main className={style.privacyPolicy__main} column>
      <stack.Header>
        <HistoryBack />
      </stack.Header>
      <stack.Article column>
        <text.H1 master dark highlight md bold justify>Privacy Policy</text.H1>
        <text.P master xxs justify>
         This Privacy Policy outlines how Memoize ("we," "our," or "us") collects, uses, and safeguards your personal information when you use the Memoize application (the "App"). We are committed to protecting your privacy and ensuring the security of your personal data. By using the App, you consent to the practices described in this Privacy Policy.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Information We Collect:</text.H2>
        <text.P master xxs justify>
          We may collect various types of personal information from you, including but not limited to your name, email address, and usage data when you use the App.
        </text.P>
        <text.H2 master dark highlight xs bold justify>How We Use Your Information:</text.H2>
        <text.P master xxs justify>
          We use the collected information to provide and improve the App's functionality and user experience, including personalizing your learning experience and providing feedback. We may also use your information for communication purposes, to send important updates, announcements, and promotional content related to the App.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Data Security:</text.H2>
        <text.P master xxs justify>
          We implement security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no method of data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your data.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Third-Party Services:</text.H2>
        <text.P master xxs justify>
          We may use third-party services to assist us in operating the App and may share your information with them for those purposes. These third-party services are subject to their own privacy policies, and we encourage you to review their policies before using the App.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Data Retention:</text.H2>
        <text.P master xxs justify>
          We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Your Rights:</text.H2>
        <text.P master xxs justify>
          You have the right to access, correct, update, or delete your personal information stored by us. You may also choose to withdraw your consent for certain processing activities.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Children's Privacy:</text.H2>
        <text.P master xxs justify>
          The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without appropriate parental consent, we will take steps to delete the information.
        </text.P>
        <text.H2 master dark highlight xs bold justify>Changes to Privacy Policy:</text.H2>
        <text.P master xxs justify>
          We may update this Privacy Policy to reflect changes in our practices. It is your responsibility to review this page periodically for any changes.
        </text.P>
        <text.P master xxs justify>
          By using the Memoize App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this Privacy Policy, please do not use the App.
        </text.P>
        <text.P master xxs justify>
          If you have any questions about this Privacy Policy, please contact us at <text.A href='mailto:cleber.engineer@gmail.com' primary xxs medium>cleger.engineer@gmail.com</text.A>.
        </text.P>
        <text.P master xxs justify>
          Last updated: August 18, 2023.
        </text.P>
      </stack.Article>
      <stack.Footer className={style.privacyPolicy__footer} middle center>
        <text.A href={urlFor('home')} primary xxs medium>Back to home</text.A>
      </stack.Footer>
    </stack.Main>
  )
}

export default component
