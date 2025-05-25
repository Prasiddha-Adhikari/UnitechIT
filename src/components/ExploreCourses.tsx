"use client";

import Image from "next/image";

export default function ExploreCourses() {
  const courses = [
    { name: "Web Development", imageSrc: "/images/video-editing.jpg" },
    { name: "Data Science", imageSrc: "/images/video-editing.jpg" },
    { name: "UI/UX Design", imageSrc: "/images/video-editing.jpg" },
    { name: "Digital Marketing", imageSrc: "/images/video-editing.jpg" },
    { name: "Cloud Computing", imageSrc: "/images/video-editing.jpg" },
  ];

  return (
    <section className="w-full bg-blue-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-12">
          {/* Texts on the left */}
          <div className="text-center md:text-left">
            <h2 className="text-[28px] font-bold mb-4">
              Explore top-rated courses to accelerate your career
            </h2>
            <p className="text-[18px]">
              Join our highly-demanded courses and gain the skills to secure your dream job.
            </p>
          </div>

          {/* Button on the right */}
          <button className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-blue-600 font-semibold transition text-lg px-6 py-3 rounded-full shadow-md">
            View All Popular Courses <span className="text-xl">➔</span>
          </button>
        </div>

        {/* Grid with 5 fixed columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {courses.map(({ name, imageSrc }, i) => (
            <article
              key={i}
              className="w-56 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="w-full h-36 rounded-t-lg overflow-hidden bg-gray-200 relative">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="224px"
                  priority={i === 0}
                />
              </div>
              <div className="py-4 px-2 text-center text-black font-semibold text-lg">
                {name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
