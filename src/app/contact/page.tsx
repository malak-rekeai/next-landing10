import React from 'react'
import Style from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={Style.container}>
     <h1 className={Style.header}>Let's Keep In Touch</h1>
     <div className={Style.content}>
     <div className={Style.imgCont}>
      <Image src="/contact.png" fill={true} alt='contact' className={Style.img}  />
     </div>
     <div>
        <form  className={Style.form}>
          <input type="text" placeholder="Name:" />
          <input type="email" placeholder="Email:" />
          <textarea placeholder="Message"></textarea>
          <Button text="Send" url="/contact" />
        </form>
     </div>
     </div>
    </div>
  )
}

export default Contact