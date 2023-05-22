import { Link } from "react-router-dom";
import "./Hero.css";
import { useContext } from "react";
import { ContextData, DataContext } from "../../../Contexts/data-context";


const Hero = () => {
    const { resetFilters } = useContext(ContextData)
    return (
        <>
            <div className="banner-text">
                <div class="eyebrow-text">Triple-Lens Camera Drone</div>
                <img className="banner-logo" src="https://www1.djicdn.com/cms/uploads/a02a6a51b25f2b54e7e8979e87e3dabc.svg" alt="mainHero" />
                <h3 className="banner-slogan">Inspiration in Focus</h3>
                <Link to="/products">
                    <button className="banner-btn" onClick={resetFilters}>See More</button>
                </Link>
            </div>
        </>
    )
}

export default Hero