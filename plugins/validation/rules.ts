import { configure, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
})

configure({
  generateMessage: localize('ru', {
    messages: {
      required: 'Поле обязательно для заполнения',
    },
  }),
})
