import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts.json")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error loading posts:", error));
    }, []);


    return <div content="BlogsList">
        <h1>記事一覧</h1>
        <div class="row row-cols-1 row-cols-md-2">
            {
                    posts.map(
                        (post) => {
                            return <div class="col">
                                <div class="card">
                                    <div class="card-body "><div class="card-title fs-5">{post.title}</div>
                                        <div class="card-text"><p>{post.summary}</p></div></div>
                                    <div class="card-footer"><small class="text-body-secondary">{post.date}</small></div>
                                    <Link class="btn btn-outline-secondary" to={`/posts/${post.slug}`}>
                                        <div class="btn-text">続きを読む</div>
                                    </Link>
                                </div>
                            </div>
                        }
                    )
                }
        </div>
    </div>;
}