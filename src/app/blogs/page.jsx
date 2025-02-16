import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="carousel w-full static">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className='p-12'>
                {
                    blogs.map((blog) => <div key={blog.id} className='border-2 my-4 p-8 rounded'>
                        <h3 className='text-xl font-semibold text-red-400'><span className='text-black'>{blog.id}. </span>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button className='bg-red-400 py-2 px-4 rounded mt-2'>
                            <Link href={`/blogs/${blog.id}`}>View Details</Link>
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

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

