import React from 'react';

const page = ({ params }) => {
    const { title, description } = blogs.find((blog) => blog.id == params.id)
    return (
        <div className='p-20'>
            <div className="card bg-cyan-200 w-96 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-red-400">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default page;

const blogs = [
    {
        "id": 1,
        "title": "10 Must-Know VS Code Extensions for Developers",
        "description": "A curated list of essential VS Code extensions to boost productivity and enhance your coding experience."
    },
    {
        "id": 2,
        "title": "The Ultimate Guide to Emmet in VS Code",
        "description": "Learn how to use Emmet to speed up your HTML and CSS workflow in Visual Studio Code."
    },
    {
        "id": 3,
        "title": "Top 5 Tips to Optimize Your Coding Workflow",
        "description": "Practical tips and tricks to make your coding sessions more efficient and productive."
    },
    {
        "id": 4,
        "title": "Understanding Git and GitHub for Beginners",
        "description": "A beginner-friendly guide to mastering Git and GitHub for version control and collaboration."
    },
    {
        "id": 5,
        "title": "How to Create a Personal Portfolio Website Using HTML and CSS",
        "description": "Step-by-step instructions on building a simple, stylish portfolio website to showcase your work."
    },
    {
        "id": 6,
        "title": "Exploring AI-Powered Code Tools in 2025",
        "description": "An overview of the latest AI tools for developers and how they can revolutionize your workflow."
    },
    {
        "id": 7,
        "title": "A Beginner's Guide to JavaScript Frameworks",
        "description": "A comparison of popular JavaScript frameworks like React, Angular, and Vue for new developers."
    },
    {
        "id": 8,
        "title": "Debugging Like a Pro: Tips for Faster Problem Solving",
        "description": "Learn effective debugging techniques to quickly identify and fix issues in your code."
    },
    {
        "id": 9,
        "title": "How to Start a Tech Blog: Tips and Tools",
        "description": "Everything you need to know to start your own tech blog, from choosing a platform to writing great content."
    },
    {
        "id": 10,
        "title": "The Future of Web Development: Trends to Watch",
        "description": "Explore the latest trends and technologies shaping the future of web development in 2025 and beyond."
    }
]
