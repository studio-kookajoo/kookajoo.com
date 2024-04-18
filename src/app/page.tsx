import React from "react";

// import Footer from "@/components/layout/Footer";
// import Hero from "@/components/layout/Hero";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

export default function Page() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Hero />
        <Footer />
      </div>
    </>
  );
}
