
import Herosection from "../components/Herosection";
import Seosection from "@/components/Seosection";
import Portfoliosection from "@/components/Portfoliosection";
import Parallacsection from "@/components/Parallacsection";
import Limitlessoption from "@/components/Limitlessoption";
import Forestimagesection from "@/components/Forestimagesection";
import Carousalsection from "@/components/Carousalsection";
import Mainclient from "@/components/Mainclient"
import Themesdownload from "@/components/Themesdownload";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
        <Herosection />
        <Seosection />
        <Portfoliosection />
        <Parallacsection />
        <Limitlessoption />
        <Forestimagesection />
        <Gallery />
        <Carousalsection />
        <Mainclient />
        <Themesdownload />
        
    </>
  );
}
