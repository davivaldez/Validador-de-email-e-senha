import { validateEmail } from "./ValidateEmail.js"
import { validatePassword } from "./validatePassword.js"
import { inputEmail, inputName, inputPassword, forms } from "./index.js"
import { validateName } from "./validateName.js"

export let paragraph = document.createElement('p')

export function validateData() {
  try
  {
    if (validateName(inputName) && validateEmail(inputEmail) && validatePassword(inputPassword)) {
      alert('Credenciais válidas!')

      paragraph.classList.remove('forms-failed')
      paragraph.innerText = 'Credenciais válidas!'
      paragraph.classList.add('forms-success')
  
      forms.appendChild(paragraph)
    }
  
    else { 
      throw new Error('Credenciais inválidas!')
    }
  }
  catch (error)
  {
    alert(error.message)
    paragraph.classList.remove('forms-success')
    paragraph.innerText = error.message
    paragraph.classList.add('forms-failed')
    forms.appendChild(paragraph)
  }
}