import Link from 'next/link'
import React from 'react'
import Style from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className=''>
      <h1 className={Style.head}>Choose a gallary</h1>
      <div className={Style.items}> 
        <Link href='/portfolio/illustrations' className={Style.item}>
        <span className={Style.title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={Style.item}>
        <span className={Style.title}>Websites</span>
        </Link>
        <Link href='/portfolio/application' className={Style.item}>
        <span className={Style.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio