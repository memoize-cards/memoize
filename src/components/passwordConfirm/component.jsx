import h from '@standard/h'
import Input, { Label } from '@elements/input'

function component () {
  return (
    <Input type='password' id='passwordConfirm' name='passwordConfirm'>
      <Label>Password confirm</Label>
    </Input>
  )
}

export default component
