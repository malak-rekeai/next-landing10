import React from 'react'
import Image from 'next/image'
import Style from './footer.module.css'

const Footer = () => {
  return (
    <div className={Style.container}>
        <div className={Style.content}>
            <p>2023 Lamamia. All Rights Reserved.</p>
        </div>
        <div className={Style.imags}>
            <Image src="/1.png" width={20} height={20} alt='facbook'/>
            <Image src="/2.png" width={20} height={20} alt='facbook'/>
            <Image src="/3.png" width={20} height={20} alt='facbook'/>
        </div>
    </div>
  )
}

export default Footer