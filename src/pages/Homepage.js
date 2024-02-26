import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Homepage = ()=>{
    
    return (
        <div id="homepage">
            <NavMenu/>
                <main>
                    <div id="home-container" className="main-content-container" >
                        <h2 className="days-one">Welcome</h2>
                        <p className="para-text jura">
                           Greetings fellow travelers of the cosmos! Whether you're  a Jedi knight, a scruffy looking nerf herder, or just a curious droid,<strong>Welcome to our Star Wars Fan Blog</strong>.
                           Here, we take a deep dive into the hear of the saga, exploring the vast expanse of planets, characters, and epic battles that define the timeless universe.
                        </p>
                        <p className="para-text days-one">
                            We Cover a wide range of  content
                            surrounding Star Wars such as ...
                        </p>
                        <ul className="jura">
                            <li>Movie News</li>
                            <li>Telvision</li>
                            <li>Latest Comics</li>
                            <li>Gaming</li>
                        </ul>
                    </div>  
                </main>
            <Footer/>
        </div>
    )

}

export default Homepage;