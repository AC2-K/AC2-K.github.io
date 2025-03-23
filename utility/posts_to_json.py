import os
import json
import frontmatter
import re

POSTS_DIR = "../public/markdown/posts"
OUTPUT_FILE = "../public/posts.json"

if not os.path.exists(POSTS_DIR):
    os.makedirs(POSTS_DIR)


def parse_markdown_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        post = frontmatter.load(f)
    
    return {
        "title": post.get("title", "Untitled"),
        "date": post.get("date", "Unknown"),
        "summary": re.sub("#"," ",post.content[:100]) + "...",
        "slug": os.path.splitext(os.path.basename(filepath))[0]
    }

def posts_to_json():
    if not os.path.exists(os.path.join(POSTS_DIR,)):
        print(f"{POSTS_DIR} cannot be found...")
        return

    posts = [
        parse_markdown_file(os.path.join(POSTS_DIR, file))
        for file in os.listdir(POSTS_DIR)
        if file.endswith(".md")
    ]

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent = 4)

    print(f"{OUTPUT_FILE} has been generated!")

if __name__ == "__main__":
    posts_to_json()