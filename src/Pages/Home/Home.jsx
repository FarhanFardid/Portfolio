import Banner from "./Banner";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Education from "./Education";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Work from "./Work";
import Skills from "./skills";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Education></Education>
            <Skills></Skills>
            <Work></Work>
            <Projects></Projects>
            <Certificate></Certificate>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;