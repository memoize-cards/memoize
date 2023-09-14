import Choose from '@directive/choose'
import h from '@standard/h'
import Textarea, { Label, Supporting } from '@elements/textarea'
import translate from './translate'

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
      <Label>{translate.label}</Label>
      <Choose when={description.validity}>
        <Supporting equal='required'>{translate.required}</Supporting>
      </Choose>
    </Textarea>
  )
}

export default component
