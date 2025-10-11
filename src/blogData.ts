export type Blog = {
    title: string;
    author: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    tags?: string[];
    slug: string;
};

export const blogs: Blog[] = [
    {
        title: "Blog Post 1",
        author: "Joe Smith",
        date: "Oct 9, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "/cat.png",
        imageAlt: "Image of a funky cat",
        tags: ["Important"],
        slug: "b1",
    },
    {
        title: "Blog Post 2",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "b2",
    },
];

/**
 * @deprecated For Milestone 1 demonstration purposes only
 */
function createBlogs() {
    const blogContainer = document.querySelector("#blog-container-name");
    if (!blogContainer) { return; }

    blogs.forEach(blog => {
        const blogLink = document.createElement("a");
        blogLink.href = `/blog/${blog.slug}`;

        const blogPost = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = blog.title;

        const image = document.createElement("img");
        image.src = blog.image
        image.alt = blog.imageAlt;

        const description = document.createElement("p");
        description.textContent = blog.description;

        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);

        blogLink.appendChild(blogPost);
        blogContainer.appendChild(blogLink);
    });
}
