import Categories from "../../Components/Home-Components/Categories";
import Hero from "../../Components/Home-Components/Hero";
import Nav from "../../Components/Nav";
import "./Home.css";

const Home = () => {
    return (
        <div className="main-home-container">
            <div className="upper-container">
                <div className="nav-container">
                    <Nav />
                </div>
                <div className="hero-container">
                    <Hero />
                </div>
            </div>
            <Categories />
        </div>

    )
}

export default Home;