import { Field, Form } from 'vee-validate'
import rules from './rules'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ValidationForm', Form)
  nuxtApp.vueApp.component('ValidationField', Field)
  rules(nuxtApp)
})
