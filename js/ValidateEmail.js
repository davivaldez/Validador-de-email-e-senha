import { spanEmail } from "./index.js"

export function validateEmail(inputEmail) {
  try
  {
    inputEmail.style.border = 'transparent'

    const fixedEmail = inputEmail.value.replace(/\s/g, '')
    const condition1 = fixedEmail.match((/\@/)) ? fixedEmail.match((/\@/))[0] : null
    const condition2 = fixedEmail.match(/\w+(?=\@)/) ? fixedEmail.match(/\w+(?=\@)/)[0] : null
    const condition3 = fixedEmail.match(/(?<=\@)\w+/) ? fixedEmail.match(/(?<=\@)\w+/)[0] : null
    const condition4 = fixedEmail.match(/(?<=\.)\w+/) ? fixedEmail.match(/(?<=\.)\w+/)[0] : null

    if (!condition1 || !condition2 || !condition3 || !condition4) {
      throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
    }

    else if (condition2.length <= 1 || condition3.length <= 1 || condition4.length <= 1) {
      throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
    }

    else {
      const splitEmail = fixedEmail.match(/(?<=\@).+/)[0]
      const finalEmail = splitEmail.match(/\.+/g)

      if (finalEmail.length > 1) {
        throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
      }

      inputEmail.style.border = '2px solid #06a714c5'
      spanEmail.innerText = ''
      return true
    }
  }
  catch (error)
  {
    inputEmail.style.border = '2px solid #f80e0ec5'
    spanEmail.innerText = error.message
  }
}