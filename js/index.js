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
