import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'

function component (name) {
  return (
    <Input
      type='text'
      id='name'
      name='name'
      required
      onBlur={(e) => name.onChange(e)}
      onChange={(e) => name.onChange(e)}
      onInvalid={(e) => name.onChange(e)}
      value={name.value}
    >
      <Label>Name</Label>
      <Choose when={name.validity}>
        <Supporting equal='required'>Name is required</Supporting>
      </Choose>
    </Input>
  )
}

export default component
