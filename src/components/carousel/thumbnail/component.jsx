import Divisor from '@components/carousel/divisor'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'
import theme from './theme'

function component (props, children) {
  return (
    <div className={style.thumbnail} style={`background-color: ${theme(props.theme)};`}>
      <div className={style.thumbnail__poster}>
        <text.Span white bold xs highlight>{children.discipline}</text.Span>
        <Divisor />
        <text.Span white medium xxxs highlight>Prof. {children.professor}</text.Span>
      </div>
    </div>
  )
}

export default component
