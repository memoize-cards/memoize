import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <div className={style.content}>
      <text.H1 master dark highlight md bold>Terms of Use</text.H1>
      <text.P master xxxs>
        By creating an account on the Memoize application, hereinafter referred to as the "App," you, hereinafter referred to as the "User," agree to the following terms:
      </text.P>
      <text.H2 master dark highlight xxs bold>Responsibility for Usage</text.H2>
      <text.P master xxxs>
        The User understands and agrees that they are solely responsible for all actions taken through their account on the App, including any shared content, interactions with other users, and use of available features.
      </text.P>
      <text.H2 master dark highlight xxs bold>Proper Use</text.H2>
      <text.P master xxxs>
        The User commits to using the App ethically, legally, and in accordance with the Terms of Use established by Memoize. The User will not engage in activities that may harm the App, other users, or Memoize.
      </text.P>
      <text.H2 master dark highlight xxs bold>Data Protection</text.H2>
      <text.P master xxxs>
        The User acknowledges and consents that Memoize. may collect and store personal information provided during the account creation process and use of the App. The processing of personal data will be conducted in accordance with the Privacy Policy of Memoize.
      </text.P>
      <text.H2 master dark highlight xxs bold>Intellectual Property</text.H2>
      <text.P master xxxs>
        The User understands and agrees that all content, design, logos, and features present in the App are protected by copyrights and intellectual property rights of Memoize. The User will not copy, modify, or distribute any App content without prior authorization from Memoize.
      </text.P>
      <text.H2 master dark highlight xxs bold>Risks and Limitations</text.H2>
      <text.P master xxxs>
        The User acknowledges that the use of the App is subject to potential technical failures, temporary interruptions, and limitations inherent to online services. Memoize. does not guarantee continuous and error-free operation of the App.
      </text.P>
      <text.H2 master dark highlight xxs bold>Disclaimer of Liability</text.H2>
      <text.P master xxxs>
        The User releases Memoize, its directors, employees, and partners from any liability for damages, losses, or harms arising from the use of the App.
      </text.P>
      <text.H2 master dark highlight xxs bold>Account Termination</text.H2>
      <text.P master xxxs>
        Memoize. reserves the right to terminate the User's account and access to the App, at its sole discretion, in the event of a violation of these terms or any suspicious activity.
      </text.P>
      <text.P master xxxs>
        By proceeding with the creation of an account on the Memoize App, the User expresses their consent and agreement with the above-established terms. If the User does not agree with these terms, they should not proceed with the creation of an account on the App.
      </text.P>
    </div>
  )
}

export default component
