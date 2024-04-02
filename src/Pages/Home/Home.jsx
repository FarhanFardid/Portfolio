import Banner from "./Banner";
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
            <Contact></Contact>
            
        </div>
    );
};

export default Home;