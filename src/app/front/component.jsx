import Choose from '@directive/choose'
import h from '@standard/h'
import Input, { Label, Supporting } from '@elements/input'

function component (front) {
  return (
    <Input
      type='text'
      id='front'
      name='front'
      required
      onBlur={(e) => front.onChange(e)}
      onChange={(e) => front.onChange(e)}
      onInvalid={(e) => front.onChange(e)}
      value={front.value}
    >
      <Label>Front</Label>
      <Choose when={front.validity}>
        <Supporting equal='required'>Front is required</Supporting>
      </Choose>
    </Input>
  )
}

export default component
