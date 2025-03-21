import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./BlogList.css";


const blogPosts = [
    { id: "post-1", title: "はじめてのブログ", summary: "はじめましてはじめました1", date: "2025-03-21" },

];

const BlogList = () => {
    return <div className="container m-auto">
        <h2>ブログ一覧</h2>
        <div className="row">
            {blogPosts.map((post) => (
                <Link class="btn btn-outline-secondary" to={`/blog/${post.id}`} >
                    <div class="card-body">
                        <h5 class="card-title">{`${post.title}`}</h5>
                        <p class="card-text">{ `${post.summary}`}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>;

}

export default BlogList;