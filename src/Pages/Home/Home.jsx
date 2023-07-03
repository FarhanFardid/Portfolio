import Banner from "./Banner";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Work from "./Work";
import Skills from "./skills";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Work></Work>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;