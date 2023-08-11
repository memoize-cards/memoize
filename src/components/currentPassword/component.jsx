import h from '@standard/h'
import Input, { Label } from '@elements/input'

function component () {
  return (
    <Input type='password' id='currentPassword' name='currentPassword'>
      <Label>Current password</Label>
    </Input>
  )
}

export default component
