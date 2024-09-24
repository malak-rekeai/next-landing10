import Button from "@/components/button/Button";
import Style from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={Style.container}>
      <div className={Style.text}>
        <h1 className={Style.title}>Better Design for your digital products</h1>
        <p className={Style.desc}>
          Welcome to my portfolio! I am a software engineer with a passion for
          creating and building web applications. I specialize in front-end
          development and design. I am currently looking for new opportunities
          to work with a team of talented individuals to build amazing products.
        </p>
        <Button text="See Our Works" url="/portfolio" />
        
        </div>
      <div className={Style.imgCont}>
        <Image src="/hero.png" alt="hero" className={Style.img} width={480} height={480} />
      </div>
    </div>
  );
}
