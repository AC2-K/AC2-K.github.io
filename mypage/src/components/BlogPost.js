import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; // KaTeXのスタイル
import "highlight.js/styles/github-dark.css"; // シンタックスハイライトのスタイル


const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`./../posts/${id}.md`)
      .then((module) => fetch(module.default))
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# 記事が見つかりませんでした"));
  }, [id]);

  return (
    <div className="container m-auto">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
      />
    </div>
  );
};

export default BlogPost;
