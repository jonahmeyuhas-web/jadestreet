import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import Reveal from "@/components/chrome/Reveal";
import Hero from "@/components/sections/Hero";
import Live from "@/components/sections/Live";
import Music from "@/components/sections/Music";
import Videos from "@/components/sections/Videos";
import Store from "@/components/sections/Store";
import SignUp from "@/components/sections/SignUp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Live />
        <Music />
        <Videos />
        <Store />
        <SignUp />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
