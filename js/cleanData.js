import { inputEmail, inputName, inputPassword, spanEmail, spanName, spanPassword } from "./index.js"
import { paragraph } from "./validateData.js"

export function cleanData() {
  inputName.value = ''
  inputEmail.value = ''
  inputPassword.value = ''

  inputName.style.border = 'transparent'
  inputEmail.style.border = 'transparent'
  inputPassword.style.border = 'transparent'

  paragraph.innerText = ''
  paragraph.classList.remove('forms-success', 'forms-failed')

  spanName.innerText = ''
  spanEmail.innerText = ''
  spanPassword.innerText = ''
}