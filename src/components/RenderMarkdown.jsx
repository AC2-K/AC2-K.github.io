import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";

export default function RenderMarkDown({ path }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`${path}`)
            .then((response) => response.text())
            .then((text) => {
                const ret = text.replace(/\-{3,}([\s\S]+)\-{3,}/, "", 1);
                return ret;
            })
            .then((text) => setContent(text))
            .catch(() => setContent("# 記事が見つかりませんでした"));
    }, [path]);


    return <div className="container m-auto">
        <ReactMarkdown
            children={content}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
        />
    </div>;
};