import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'
import translate from './translate'

function component () {
  return (
    <Input
      type='password'
      id='newPassword'
      name='newPassword'
    >
      <Label>{translate.label}</Label>
      <Supporting>{translate.supporting}</Supporting>
    </Input>
  )
}

export default component
