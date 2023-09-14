import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'
import pattern from './pattern'
import translate from './translate'

function component (email) {
  return (
    <Input
      type='email'
      id='email'
      name='email'
      required
      pattern={pattern}
      onBlur={(e) => email.onChange(e)}
      onChange={(e) => email.onChange(e)}
      onInvalid={(e) => email.onChange(e)}
      value={email.value}
    >
      <Label>{translate.label}</Label>
      <Choose when={email.validity}>
        <Supporting equal='required'>{translate.required}</Supporting>
        <Supporting equal='pattern'>{translate.pattern}</Supporting>
      </Choose>
    </Input>
  )
}

export default component
