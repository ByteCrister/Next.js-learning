import React from 'react'

const page = async ({ params }) => {
    const { id } = await params;

    const SelectedBlog = blogs.find((blog) => blog.id === parseInt(id)) || null;
    if (!SelectedBlog) return (<div><h1>Invalid Blog!!</h1></div>);

    return (
        <div>
            <h2>Details</h2>
            <h3>Title : {SelectedBlog.title}</h3>
            <h4>Description: {SelectedBlog.content}</h4>
        </div>
    );
};

export default page;

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
];
