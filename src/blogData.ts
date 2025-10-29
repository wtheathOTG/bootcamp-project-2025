export interface Blog {
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
        image: "/pictures/cat.png",
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
        image: "/pictures/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "b2",
    },
    {
        title: "Blog Post 3",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "/pictures/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "b3",
    },
    {
        title: "Blog Post 4",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "/pictures/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "b4",
    },
    {
        title: "Blog Post 5",
        author: "Joe Smith",
        date: "Sep 23, 2025",
        description: "This is a short description of the article. I am going to keep " +
            "writing so that this paragraph fills up. Here is one last sentence to fill up a little more space...",
        image: "/pictures/cat.png",
        imageAlt: "Image of a funky cat",
        slug: "b5",
    },
];
