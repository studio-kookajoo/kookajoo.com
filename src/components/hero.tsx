import Image from "next/image";

type Props = {
    backgroundColor: string;
};

const Hero: any = (props: Props) => {
  return (
    // <div className="hero h-5/6 bg-base-200">
    <div className={`hero h-5/6 bg-${props.backgroundColor}`}>
    {/* <div className={`hero h-5/6 bg-royalty`}> */}
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {/* <img
            className="w-32 md:w-32 lg:w-48"
            src="/kookajoo-logo.svg"
            alt="Studio Kookajoo logo"
          /> */}
          <Image
            src="/kookajoo-logo.svg"
            alt="Studio Kookajoo logo"
            width={2500}
            height={750}
            // fill
            // sizes="(max-width: 768px) 10w, (max-width: 1200px) 5w, 16hw"
            // sizes="w-16"
            // className="w-16 md:w-32 lg:w-48"
            // className="dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
