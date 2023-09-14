import Choose from '@directive/choose'
import h from '@standard/h'
import Textarea, { Label, Supporting } from '@elements/textarea'
import translate from './translate'

function component (back) {
  return (
    <Textarea
      type='text'
      id='back'
      name='back'
      required
      onBlur={(e) => back.onChange(e)}
      onChange={(e) => back.onChange(e)}
      onInvalid={(e) => back.onChange(e)}
      value={back.value}
    >
      <Label>{translate.label}</Label>
      <Choose when={back.validity}>
        <Supporting equal='required'>{translate.required}</Supporting>
      </Choose>
    </Textarea>
  )
}

export default component
