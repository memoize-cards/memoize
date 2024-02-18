import env from '@standard/env'

env.production && (
  Object
    .getOwnPropertyNames(console)
    .forEach((key) => Reflect.set(console, key, () => undefined))
)
