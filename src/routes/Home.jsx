import React from "react";
import RenderMarkDown from "../components/RenderMarkdown";
import "../styles/Home.css"

export default function Home() {
    return <div className="Home">
        <RenderMarkDown path={"/public/markdown/profile.md"} />
    </div>;

}
