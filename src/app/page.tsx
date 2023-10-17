import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Hero backgroundColor="royalty"/>
        <Footer />
      </div>
    </>
  );
}
