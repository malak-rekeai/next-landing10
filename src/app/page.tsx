import Button from "@/components/button/Button";
import Style from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={Style.container}>
      <div className={Style.text}>
        <h1 className={Style.title}>Elevate Your Digital Experience        </h1>
        <p className={Style.desc}>
        With a strong foundation in modern frameworks and design principles, I am committed to delivering high-quality digital products that meet both business goals and user needs. I am eager to collaborate with a dynamic team of innovators to bring visionary ideas to life and shape the future of technology together.
        </p>
        <Button text="See Our Works" url="/portfolio" />
        
        </div>
      <div className={Style.imgCont}>
        <Image src="/hero.png" alt="hero" className={Style.img} width={480} height={480} />
      </div>
    </div>
  );
}
