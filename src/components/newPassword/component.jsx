import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'

function component () {
  return (
    <Input type='password' id='newPassword' name='newPassword'>
      <Label>New password</Label>
      <Supporting>Your new password must be more than 8 characters</Supporting>
    </Input>
  )
}

export default component
