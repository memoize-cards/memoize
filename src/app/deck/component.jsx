import BackToDashboard from '@app/backToDashboard'
import CreateCard from './createCard'
import h from '@standard/h'
import Head from './head'
import Main from './main'
import Master from '@app/master'
import Stats from './stats'
import Study from './study'

function component () {
  return (
    <Master>
      <BackToDashboard />
      <Main>
        <Head />
        <Stats />
        <CreateCard />
        <Study />
      </Main>
    </Master>
  )
}

export default component
