'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Local image */}
      <div className="relative h-40 w-full">
        <Image
          src="/images/hero1.jpg" // path from public folder
          alt={blog.title}
          fill
          className="object-cover"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <time className="text-sm text-gray-500 mb-2 block">{blog.date}</time>
        <h2 className="text-lg font-semibold text-orange-700 mb-2">{blog.title}</h2>
        <p className="text-sm text-gray-700 mb-4 flex-grow">{blog.description}</p>
        <button className="text-sm text-white bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition self-start">
          Read More
        </button>
      </div>
    </article>
  );
}


export default function BlogPage() {
  const demoBlogs: Blog[] = [
    {
      id: 1,
      title: 'Why IT Education is Crucial Today',
      date: 'May 28, 2025',
      description:
        'Explore the importance of IT skills in the modern job market, and how you can start your journey with the right foundation.',
    },
    {
      id: 2,
      title: 'Top 5 Programming Languages to Learn in 2025',
      date: 'May 20, 2025',
      description:
        'Discover which programming languages are dominating the tech industry and why they matter for your career growth.',
    },
    {
      id: 3,
      title: 'Inside Unitech IT Solution: Our Mission & Vision',
      date: 'May 15, 2025',
      description:
        'Learn about Unitech’s goals in transforming IT education and what makes our training programs effective.',
    },
  ];

  const [blogs] = useState<Blog[]>(demoBlogs);

  return (
    <>
      {/* Heading Section */}
      <section className="w-full bg-blue-600">
        <div className="max-w-6xl mx-auto py-10 px-4 text-center">
          <h1 className="text-white text-4xl font-bold">
            Our <span className="text-orange-300">Blog</span>
          </h1>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-gray-100 min-h-screen py-12 px-4 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
