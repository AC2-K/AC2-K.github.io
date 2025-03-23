import React from "react";
import RenderMarkDown from "../components/RenderMarkdown";
import "/src/styles/Home.css"
const Home = () => {
    return <div className="Home">
        <RenderMarkDown path={"/markdown/profile.md"} />
    </div>;

}


export default Home;