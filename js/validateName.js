import { spanName } from "./index.js"

export function validateName(inputName) {
  try
  {
    inputName.style.border = 'transparent'

    if (inputName.value.match(/\d/g)) {
      throw new Error('Nome inválido, o nome não pode conter números!')
    }

    else if (!inputName.value) {
      throw new Error('Nome inválido, o nome não pode estar vazio!')
    }

    else {
      inputName.style.border = '2px solid #06a714c5'
      spanName.innerText = ''
      return true
    }
  }
  catch (error)
  {
    inputName.style.border = '2px solid #f80e0ec5'
    spanName.innerText = error.message
  }
}