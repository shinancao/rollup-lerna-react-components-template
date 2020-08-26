import React from 'react'
import '../style/style.scss'

function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User"
console.log(greeter(user))

const Button = ({ children }) => <button className='button'>{children}</button>
export default Button
