import React from "react";
import { useParams } from "react-router-dom";
import RenderMarkDown from "../RenderMarkdown";

export default function BlogPost() {
    const { id } = useParams();

    return (
        <RenderMarkDown path={`pulic/markdown/posts/${id}.md`} />
    );
};