import Button from '@elements/button'
import Container from './container'
import h from '@standard/h'
import redirectTo from './redirectTo'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <Container>
      <stack.Div column>
        <text.Span master darker xxs bold>{translate.title}</text.Span>
        <text.Span master xxxs>{translate.description}</text.Span>
      </stack.Div>
      <Button onClick={() => redirectTo.createCard()} wide>{translate.createCard}</Button>
    </Container>
  )
}

export default component
