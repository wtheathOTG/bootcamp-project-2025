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
        image: "",
        imageAlt: "",
        tags: ["Important"],
        slug: "b1",
    },
    {
        title: "Blog Post 2",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "",
        imageAlt: "",
        slug: "b2",
    },
];

function createBlogs() {
    const blogContainer = document.querySelector(".blog-container-name");
    blogs.forEach(blog => {
        const blogPost = document.createElement("div");
        const title = document.createElement("h1");
        const image = document.createElement("img");
        const description = document.createElement("p");

        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);

        blogContainer?.appendChild(title);
    });
}
