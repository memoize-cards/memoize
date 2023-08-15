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

import '@app/create'
import '@app/study'

import '@site/home'

import router from '@standard/router'

router.handle()
