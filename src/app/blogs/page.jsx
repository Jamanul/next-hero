import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            {
                blogs.map(blog=><div key={blog.slug_title} className='border-2 border-red-500 p-10'>{blog.description} <br />
                <button className='btn'><Link href={`/blogs/${blog.slug_title}`}>view details</Link></button>
                </div>)
            }
        </div>
    );
};
const blogs= [
    {
      "slug_title": "how-to-ace-your-scholarship-interview",
      "description": "A comprehensive guide on how to prepare and excel in scholarship interviews, including tips on common questions and how to present yourself."
    },
    {
      "slug_title": "top-10-colleges-for-engineering",
      "description": "An in-depth look at the top 10 engineering colleges in the world, exploring their programs, facilities, and student experiences."
    },
    {
      "slug_title": "artificial-intelligence-in-education",
      "description": "Exploring the impact of artificial intelligence on education, from personalized learning to automated grading systems."
    },
    {
      "slug_title": "how-to-create-a-stunning-art-portfolio",
      "description": "Tips and tricks for creating an impressive art portfolio that showcases your best work and helps you stand out to potential schools and employers."
    },
    {
      "slug_title": "the-benefits-of-online-learning",
      "description": "An analysis of the benefits of online learning, including flexibility, accessibility, and the ability to balance work and study."
    }
  ]
  
export default BlogsPage;