import React from "react";
import { useParams } from "react-router-dom";
import RenderMarkDown from "../src/components/RenderMarkdown";

export default function BlogPost() {
    const { id } = useParams();
    console.log(id);

    return (
        <RenderMarkDown path={`/markdown/posts/${id}.md`} />
    );
};