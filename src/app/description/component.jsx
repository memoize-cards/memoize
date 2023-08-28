import Choose from '@directive/choose'
import h from '@standard/h'
import Textarea, { Label, Supporting } from '@elements/textarea'

function component (description) {
  return (
    <Textarea
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
    </Textarea>
  )
}

export default component
