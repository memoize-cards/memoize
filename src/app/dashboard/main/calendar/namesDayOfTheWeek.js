import lang from '@standard/lang'

const namesDayOfTheWeek = {
  [lang.EN]: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  [lang.ES]: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  [lang.PT]: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
}

export default namesDayOfTheWeek[lang.value]
