import { spanPassword } from "./index.js"

export function validatePassword(inputPassword) {
  try
  {
    inputPassword.style.border = 'transparent'

    const upperCaseLetter = inputPassword.value.match(/[A-Z]/g) ? inputPassword.value.match(/[A-Z]/)[0] : null
    const lowerCaseLetter = inputPassword.value.match(/[a-z]/g) ? inputPassword.value.match(/[a-z]/)[0] : null
    const number = inputPassword.value.match(/[0-9]/g) ? inputPassword.value.match(/[0-9]/)[0] : null
    const specialCharacter = inputPassword.value.match(/[^a-zA-Z0-9]/g) ? inputPassword.value.match(/[^a-zA-Z0-9]/g)[0] : null

    if (!upperCaseLetter) {
      throw new Error('Senha inválida. A senha precisa de uma letra maiúscula!')
    }

    else if (!lowerCaseLetter) {
      throw new Error('Senha inválida. A senha precisa de uma letra minúscula!')
    }

    else if (!number) {
      throw new Error('Senha inválida. A senha precisa de um número!')
    }

    else if (!specialCharacter) {
      throw new Error('Senha inválida. A senha precisa de um caracter especial!')
    }

    else if (inputPassword.value.length < 8) {
      throw new Error('Senha inválida, a senha deve conter pelo menos 8 caracteres!')
    }

    else {
      inputPassword.style.border = '2px solid #06a714c5'
      spanPassword.innerText = ''
      return true
    }
  }
  catch (error)
  {
    inputPassword.style.border = '2px solid #f80e0ec5'
    spanPassword.innerText = error.message
  }
}