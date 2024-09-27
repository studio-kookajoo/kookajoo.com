import Image from "next/image";
import logo from "/public/kookajoo_drop-shadow.svg";
import { NextComponentType } from "next";

const Hero: NextComponentType = () => {
  return (
    <div className={"hero h-5/6 bg-royalty"}>
      <div className="hero-content grid grid-cols-12 gap-2">
        <div className="col-start-2 col-span-10">
          <Image src={logo} alt="Studio Kookajoo logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
