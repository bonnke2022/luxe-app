import AboutDetails from "@/components/AboutDetails";
import ArtWoman from "@/assets/illusion.jpg";
import Landing from "@/components/Landing";

const AboutPage = () => {
  return (
    <>
      <Landing pic={ArtWoman} alt="Art Woman" text="About Us" />
      <AboutDetails />
    </>
  );
};

export default AboutPage;
