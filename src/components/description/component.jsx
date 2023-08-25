import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'

function component (description) {
  return (
    <Input
      type='text'
      id='description'
      name='description'
      required
      onBlur={(e) => description.onChange(e)}
      onChange={(e) => description.onChange(e)}
      onInvalid={(e) => description.onChange(e)}
      value={description.value}
    >
      <Label>Description</Label>
      <Choose when={description.validity}>
        <Supporting equal='required'>Description is required</Supporting>
      </Choose>
    </Input>
  )
}

export default component
