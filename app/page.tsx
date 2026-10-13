import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import Reveal from "@/components/chrome/Reveal";
import Hero from "@/components/sections/Hero";
import Music from "@/components/sections/Music";
import Videos from "@/components/sections/Videos";
import SignUp from "@/components/sections/SignUp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Music />
        <Videos />
        <SignUp />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
