import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'
import Show from '@directive/show'

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
      <Label>Password</Label>
      <Choose when={password.validity}>
        <Supporting equal='required'>Password is required</Supporting>
      </Choose>
      <Show when={password.supporting}>
        <Supporting>Must be at least 8 characters</Supporting>
      </Show>
    </Input>
  )
}

export default component
