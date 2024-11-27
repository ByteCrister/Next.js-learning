import Link from 'next/link';
import React from 'react'

const Blogs = () => {
    return (
        <section className='flex flex-wrap gap-2 p-5'>
            {
                blogs.map((blog) => {
                    return <div key={blog.id} className='bg-yellow-200 px-3 py-1 rounded'>
                        <h3>Title: {blog.title}</h3>
                        <p>Description: {blog.content.substring(0, 10) + '...'}</p>
                        <button className='bg-orange-800 text-slate-300 font-medium outline-none border-none px-3 py-1 rounded'>
                            <Link href={`/blogs/${blog.id}`}>View Details</Link>
                        </button>
                    </div>
                })
            }
        </section>
    )
}

export default Blogs;

const blogs = [
    { id: 1, title: 'Designing the Future of Web Development', content: 'Exploring modern web design trends and technologies.' },
    { id: 2, title: 'Descriptive Analytics: A Guide for Beginners', content: 'A deep dive into descriptive analytics and its applications.' },
    { id: 3, title: 'Desktop vs. Mobile: Which is Better for Development?', content: 'Comparing desktop and mobile platforms for software development.' },
    { id: 4, title: 'Desire for Efficiency: How to Improve Your Workflow', content: 'Tips and tools to make your development workflow more efficient.' },
    { id: 5, title: 'Design Thinking: A Powerful Tool for Problem Solving', content: 'Applying design thinking to solve complex business challenges.' },
    { id: 6, title: 'Descriptive Statistics in Data Analysis', content: 'An introduction to descriptive statistics and its importance in data analysis.' },
    { id: 7, title: 'Destruction of Old Code: When to Refactor?', content: 'Learning when and why to refactor your codebase.' },
    { id: 8, title: 'Desktop Applications vs. Web Applications', content: 'Pros and cons of desktop and web-based applications.' },
    { id: 9, title: 'Designing for Accessibility in Web Development', content: 'Best practices for creating accessible and inclusive websites.' },
    { id: 10, title: 'Describing Data: A Key to Better Decision Making', content: 'How descriptive data analysis improves decision-making processes.' }
]
