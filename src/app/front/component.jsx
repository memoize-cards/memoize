import Choose from '@directive/choose'
import h from '@standard/h'
import Textarea, { Label, Supporting } from '@elements/textarea'
import translate from './translate'

function component (front) {
  return (
    <Textarea
      type='text'
      id='front'
      name='front'
      required
      onBlur={(e) => front.onChange(e)}
      onChange={(e) => front.onChange(e)}
      onInvalid={(e) => front.onChange(e)}
      value={front.value}
    >
      <Label>{translate.label}</Label>
      <Choose when={front.validity}>
        <Supporting equal='required'>{translate.required}</Supporting>
      </Choose>
    </Textarea>
  )
}

export default component
