import Link from 'next/link'
import React from 'react'
import Style from './button.module.css'

const Button = ({ text , url }) => {

  return (
   <Link href={url}>
    <button className= {Style.container}>{text}</button>
   
   </Link>
  )
}

export default Button