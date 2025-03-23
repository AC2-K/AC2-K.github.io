import React from "react";
import RenderMarkDown from "../components/RenderMarkdown";
import "../styles/Home.css"

export default function Home() {
    console.log("OK");
    return <div className="Home">
        <RenderMarkDown path={"../../public/markdown/profile.md"} />
    </div>;

}
