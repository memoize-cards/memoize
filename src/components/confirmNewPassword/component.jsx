import h from '@standard/h'
import Input, { Label } from '@elements/input'

function component () {
  return (
    <Input type='password' id='confirmNewPassword' name='confirmNewPassword'>
      <Label>Confirm new password</Label>
    </Input>
  )
}

export default component
