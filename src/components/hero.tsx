import Image from "next/image";
import logo from "/public/kookajoo-logo.svg";

type Props = {
  backgroundColor: string;
};

const Hero: any = (props: Props) => {
  return (
    // <div className="hero h-5/6 bg-base-200">
    <div className={`hero h-5/6 bg-${props.backgroundColor}`}>
      {/* <div className={`hero h-5/6 bg-royalty`}> */}
      {/* <div className="hero-content text-center"> */}
      <div className="hero-content">
        <div className="max-w-2xl">
          {/* <img
            className="w-32 md:w-32 lg:w-48"
            src="/kookajoo-logo.svg"
            alt="Studio Kookajoo logo"
          /> */}
          <Image
            src={logo}
            alt="Studio Kookajoo logo"
            // width={2500}
            // height={750}
            //   style={{
            //     width: "80%",
            //     height: "auto",
            //   }}
            // sizes="(max-width: 768px) 10w, (max-width: 1200px) 5w, 16hw"
            // sizes="w-16"
            // className="w-16 md:w-32 lg:w-48"
            // className="dark:invert"
          />
        </div>
      </div>
    </div>
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <Image
    //     alt="Studio Kookajoo logo"
    //     src={logo}
    //     sizes="100vw"
    //     style={{
    //       width: "100%",
    //       height: "auto",
    //     }}
    //   />
    // </div>
  );
};

export default Hero;
