type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "",
        date: "",
        description: "",
        image: "",
        imageAlt: "",
        slug: "",
    },
    {
        title: "",
        date: "",
        description: "",
        image: "",
        imageAlt: "",
        slug: "",
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
