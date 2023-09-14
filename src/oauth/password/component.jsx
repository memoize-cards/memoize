import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'
import Show from '@directive/show'
import translate from './translate'

function component (password) {
  return (
    <Input
      type='password'
      id='password'
      name='password'
      required
      onBlur={(e) => password.onChange(e)}
      onChange={(e) => password.onChange(e)}
      onInvalid={(e) => password.onChange(e)}
      value={password.value}
    >
      <Label>{translate.label}</Label>
      <Choose when={password.validity}>
        <Supporting equal='required'>{translate.required}</Supporting>
      </Choose>
      <Show when={password.supporting}>
        <Supporting>{translate.supporting}</Supporting>
      </Show>
    </Input>
  )
}

export default component
