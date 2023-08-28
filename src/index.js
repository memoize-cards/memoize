import '@polyfill/group'
import '@polyfill/requestAnimationFrame'
import '@polyfill/setImmediate'

import '@pixel/reset'
import '@pixel/tokens'
import '@pixel/sw'

import '@oauth/checkYourEmail'
import '@oauth/forgotPassword'
import '@oauth/logIn'
import '@oauth/logOut'
import '@oauth/passwordReset'
import '@oauth/setNewPassword'
import '@oauth/signUp'

import '@app/card'
import '@app/createCard'
import '@app/createDeck'
import '@app/dashboard'
import '@app/deck'

import '@site'

import router from '@standard/router'

router.handle()
