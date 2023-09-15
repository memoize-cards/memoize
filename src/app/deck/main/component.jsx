import CreateCard from './createCard'
import h from '@standard/h'
import Header from './header'
import Stats from './stats'
import style from './style'

function component () {
  return (
    <main className={style.main}>
      <Header />
      <Stats />
      <CreateCard />
    </main>
  )
}

export default component
