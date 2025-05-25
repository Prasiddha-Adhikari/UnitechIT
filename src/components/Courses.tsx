"use client";

import Image from "next/image";
import Link from "next/link";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

type Course = {
  name: string;
  imageSrc: string;
};

type Category = {
  title: string;
  courses: Course[];
};

const categories: Category[] = [
  {
    title: "Computer Programming",
    courses: [
      { name: "ASP .NET Core Training in Nepal", imageSrc: "/images/video-editing.jpg" },
      { name: "Advanced React.js Training in Nepal", imageSrc: "/images/course2.jpg" },
      { name: "Python with Django Training in Nepal", imageSrc: "/images/course3.jpg" },
      { name: "MERN Stack Training in Kathmandu, Nepal", imageSrc: "/images/course4.jpg" },
    ],
  },
  {
    title: "Designing Courses",
    courses: [
      { name: "Video Editing Training in Nepal", imageSrc: "/images/course5.jpg" },
      { name: "UI/UX Design Training in Nepal", imageSrc: "/images/course6.jpg" },
      { name: "Web Design Training in Nepal", imageSrc: "/images/course7.jpg" },
      { name: "Graphic Design Training in Nepal", imageSrc: "/images/course8.jpg" },
    ],
  },
  {
    title: "Full Stack Web Development",
    courses: [
      { name: "Advanced React.js Training in Nepal", imageSrc: "/images/course2.jpg" },
      { name: "Web Design Training in Nepal", imageSrc: "/images/course7.jpg" },
      { name: "MERN Stack Training in Kathmandu, Nepal", imageSrc: "/images/course4.jpg" },
    ],
  },
  {
    title: "Digital Marketing",
    courses: [
      { name: "Digital Marketing Training in Nepal", imageSrc: "/images/course9.jpg" },
    ],
  },
  {
    title: "Popular Courses",
    courses: [
      { name: "Video Editing Training in Nepal", imageSrc: "/images/course5.jpg" },
      { name: "Advanced React.js Training in Nepal", imageSrc: "/images/course2.jpg" },
      { name: "DevOps Engineering Training in Nepal", imageSrc: "/images/course10.jpg" },
      { name: "UI/UX Design Training in Nepal", imageSrc: "/images/course6.jpg" },
    ],
  },
];


export default function Courses() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 text-black bg-white">
      {categories.map(({ title, courses }, idx) => (
        <div key={idx} className="mb-14">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map(({ name, imageSrc }, i) => (
              <Link href={`/courses/${slugify(name)}`} key={i}>
                <article className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition flex flex-col items-center">
                  <div className="w-full h-36 rounded-t-lg overflow-hidden bg-gray-200 relative">
                    <Image
                      src={imageSrc}
                      alt={name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="224px"
                      priority={i === 0 && idx === 0}
                    />
                  </div>
                  <div className="py-4 px-3 text-center text-black font-semibold text-lg">
                    {name}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
