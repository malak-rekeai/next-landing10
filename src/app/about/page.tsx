import React from 'react'
import Style from './about.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={Style.container}>
  <div className={Style.imgContainer}>
    <Image src="/websites.jpg" alt="Picture of the author" fill={true} className={Style.img} />
    <div>
      <h4 className={Style.titleImg}>Digital Storytellers</h4>
      <p className={Style.descImg}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  <div className={Style.content}>
    <div className={Style.item}>
      <h1 className={Style.title}>Who We Are</h1>
      <p className={Style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos delectus minima nesciunt, iusto consequatur ex quasi consectetur error odit optio deserunt voluptas ipsa, animi sunt itaque rerum provident, mollitia non.
        <br />
        <br />
         Eos delectus minima nesciunt, iusto consequatur ex quasi consectetur error odit optio deserunt voluptas ipsa, animi sunt itaque rerum provident, mollitia non.
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className={Style.item}>
      <h1 className={Style.title}>What We Do</h1>
      <p className={Style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam dolores aliquam minus incidunt ea unde, provident, odio, corrupti temporibus quae molestiae magnam eius nesciunt asperiores. Ipsum totam rerum nemo.
        <br />
        <br />
        Natus aperiam dolores aliquam minus incidunt ea unde, provident, odio, corrupti temporibus quae molestiae magnam eius nesciunt asperiores. Ipsum totam rerum nemo.
      </p>
     <Button text="Contact Us" url="/contact" />
    </div>
  </div>
    </div>
  )
}

export default About