class Interval {
  static get oneMinute () {
    // TODO: Como acabei de criar o cartao, acredito que seja valido
    // o cartao ficar disponivel para acesso imediato
    // return f.add(new Date().getTime(), (1 * 60 * 1000))
    return new Date().getTime()
  }
}

export default Interval
