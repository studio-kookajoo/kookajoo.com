// TODO: Make background stretch to height.

const Hero: any = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Studio <span className="dark:text-orange-400">Kookajoo</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">A little note.</p>
        <div className="flex flex-wrap justify-center"></div>
      </div>
    </section>
  );
};

export default Hero;
