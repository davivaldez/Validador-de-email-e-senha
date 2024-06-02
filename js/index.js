import { cleanData } from "./cleanData.js"
import { validateData } from "./validateData.js"

export const inputName = document.getElementById('name-input')
export const inputEmail = document.getElementById('email-input')
export const inputPassword = document.getElementById('password-input')
export let spanName = document.getElementById('name-error')
export let spanEmail = document.getElementById('email-error')
export let spanPassword = document.getElementById('password-error')
export const forms = document.getElementById('forms')
const btnValidateData = document.getElementById('btn-validate')
const btnClean = document.getElementById('btn-clean')

btnValidateData.addEventListener('click', validateData)
btnClean.addEventListener('click', cleanData)

























// const inputEmail = document.getElementById('name-input')
// const inputPassword = document.getElementById('password-input')

// function validateData() {

//   if (validateEmail(inputEmail.value) && validatePassword(inputPassword.value)) {
//     alert('Credenciais válidas!')
//     cleanInputs()
//   }

//   else {
//     alert('Credenciais inválidas!')
//   }
// }

// function validateEmail(inputEmail) {
//   try
//   {
//     const fixedEmail = inputEmail.replace(/[\s\,]/g, '')
//     const condition1 = fixedEmail.match((/\@/)) ? fixedEmail.match((/\@/))[0] : null
//     const condition2 = fixedEmail.match(/\w+(?=\@)/) ? fixedEmail.match(/\w+(?=\@)/)[0] : null
//     const condition3 = fixedEmail.match(/(?<=\@)\w+/) ? fixedEmail.match(/(?<=\@)\w+/)[0] : null
//     const condition4 = fixedEmail.match(/(?<=\.)\w+/) ? fixedEmail.match(/(?<=\.)\w+/)[0] : null

//     if (!condition1 || !condition2 || !condition3 || !condition4) {
//       throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
//     }

//     else if (condition2.length <= 1 || condition3.length <= 1 || condition4.length <= 1) {
//       throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
//     }

//     else {
//       const splitEmail = fixedEmail.match(/(?<=\@).+/)[0]
//       const finalEmail = splitEmail.match(/\.+/g)

//       if (finalEmail.length > 1) {
//         throw new Error('E-mail inválido, siga a seguinte estrutura: xx@xx.xx')
//       }

//       alert('E-mail válido!')
//       return true
//     }
//   }
//   catch (error)
//   {
//     alert(error.message)
//   }
// }

// function validatePassword(inputPassword) {
//   try
//   {
//     const upperCaseLetter = inputPassword.match(/[A-Z]/g) ? inputPassword.match(/[A-Z]/)[0] : null
//     const lowerCaseLetter = inputPassword.match(/[a-z]/g) ? inputPassword.match(/[a-z]/)[0] : null
//     const number = inputPassword.match(/[0-9]/g) ? inputPassword.match(/[0-9]/)[0] : null
//     const specialCharacter = inputPassword.match(/\W/g) ? inputPassword.match(/\W/g)[0] : null

//     if (!upperCaseLetter || !lowerCaseLetter || !number || !specialCharacter) {
//       throw new Error('Senha inválida!')
//     }

//     else if (inputPassword.length < 8) {
//       throw new Error('Senha inválida, a senha deve conter pelo menos 8 caracteres!')
//     }

//     else {
//       alert('Senha válida!')
//       return true
//     }
//   }
//   catch (error)
//   {
//     alert(error.message)
//   }
// }

// function cleanInputs() {
//   inputEmail.value = ''
//   inputPassword.value = ''
// }