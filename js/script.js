function displayBlogPosts(mdText) {
    const container = document.getElementById('blog-container');
    container.innerHTML = marked.parse(mdText);
}

function fetchBlogPosts(filePath) {
    fetch(filePath).then(
        response => {
            if (!response.ok) {
                throw new Error("Sorry, markdown files couldn't be read...");
            }
            return response.text();
        }
    ).then(
        mdText => {
            displayBlogPosts(mdText);
        }
    ).catch(error => {
        console.error(error.message);
    });
}

function getMDFilesFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('file') || 'blogs/blog1.md';
}

window.onload = () => {
    const postFile = getMDFilesFromURL();
    fetchBlogPosts(postFile);
};