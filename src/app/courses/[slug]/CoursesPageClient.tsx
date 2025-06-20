'use client';

import Image from "next/image";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

type CoursePageClientProps = {
  slug: string;
};

function deslugify(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getCourseData(slug: string) {
  const courseMap: Record<
    string,
    { title: string; image: string; overview: string; syllabus: string[] }
  > = {
    "asp-net-core-training-in-nepal": {
      title: "ASP .NET Core Training in Nepal",
      image: "/images/video-editing.jpg",
      overview:
        "This ASP.NET Core course teaches you how to build modern web applications using Microsoft’s .NET Core framework.",
      syllabus: [
        "Introduction to ASP.NET Core",
        "Routing and Middleware",
        "Working with Razor Pages / MVC",
        "Authentication and Authorization",
        "Database Integration",
        "Deployment and Hosting",
      ],
    },
    "advanced-reactjs-training-in-nepal": {
      title: "Advanced Reactjs Training In Nepal",
      image: "/images/video-editing.jpg",
      overview:
        "Learn modern frontend development with React, JSX, Hooks, and advanced state management techniques.",
      syllabus: [
        "JSX and Components",
        "Hooks and State",
        "React Router",
        "API Integration",
        "Project Structure",
        "Testing and Deployment",
      ],
    },
  };

  return (
    courseMap[slug] ?? {
      title: deslugify(slug),
      image: "/placeholder-course.jpg",
      overview: "Course overview not found.",
      syllabus: [],
    }
  );
}

const syllabusDescriptions: Record<string, string> = {
  "Introduction to ASP.NET Core": "Learn the basics and architecture of ASP.NET Core.",
  "Routing and Middleware": "Understand routing mechanisms and middleware pipeline.",
  "Working with Razor Pages / MVC": "Explore Razor Pages and MVC patterns.",
  "Authentication and Authorization": "Implement security using authentication and authorization.",
  "Database Integration": "Learn how to connect and work with databases.",
  "Deployment and Hosting": "Deploy your ASP.NET Core app to production servers.",
  "JSX and Components": "Understand JSX syntax and building reusable components.",
  "Hooks and State": "Manage state with React Hooks efficiently.",
  "React Router": "Add navigation and routing to your React app.",
  "API Integration": "Fetch and handle data from external APIs.",
  "Project Structure": "Organize your React project for scalability.",
  "Testing and Deployment": "Write tests and deploy your React apps.",
};

export default function CoursePageClient({ slug }: CoursePageClientProps) {
  const [mainTab, setMainTab] = useState<"overview" | "syllabus">("overview");
  const [actionTab, setActionTab] = useState<"enroll" | "inquiry">("enroll");
  const [openTopics, setOpenTopics] = useState<Set<string>>(new Set());

  const course = getCourseData(slug);
  const breadcrumbs = ["Home", "ComputerProgramming", course.title];

  function toggleTopic(topic: string) {
    setOpenTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(topic)) {
        newSet.delete(topic);
      } else {
        newSet.add(topic);
      }
      return newSet;
    });
  }

  return (
    <main className="w-full">
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 w-full py-6 px-6">
        <nav className="text-m text-black max-w-7xl mx-auto">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-1">{">"}</span>}
              {index < breadcrumbs.length - 1 ? (
                <a href="#" className="text-blue-600 hover:underline">
                  {crumb}
                </a>
              ) : (
                <span className="text-gray-800 font-medium">{crumb}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Course Banner */}
      <div className="bg-blue-600 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">{course.title}</h1>
        </div>
      </div>

      {/* Tabs and Content Section */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Main Tabs and Content */}
        <div className="md:col-span-2">
          {/* Main Tab Headers */}
          <div className="flex space-x-4 border-b mb-4">
            <button
              onClick={() => setMainTab("overview")}
              className={`py-2 px-4 font-semibold transition-colors ${
                mainTab === "overview"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setMainTab("syllabus")}
              className={`py-2 px-4 font-semibold transition-colors ${
                mainTab === "syllabus"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Syllabus
            </button>
          </div>

          {/* Main Tab Content */}
          <div className="transition duration-300 ease-in-out">
            {mainTab === "overview" && (
              <div>
                <h2 className="text-xl font-bold mb-2">Course Overview</h2>
                <p>{course.overview}</p>
              </div>
            )}
            {mainTab === "syllabus" && (
              <div>
                <h2 className="text-xl font-bold mb-2">Course Syllabus</h2>
                <ul className="divide-y border rounded">
                  {course.syllabus.length > 0 ? (
                    course.syllabus.map((topic) => {
                      const isOpen = openTopics.has(topic);
                      return (
                        <li key={topic} className="px-4 py-3">
                          <button
                            onClick={() => toggleTopic(topic)}
                            className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
                            aria-expanded={isOpen}
                            aria-controls={`desc-${topic.replace(/\s+/g, "-")}`}
                          >
                            <span>{topic}</span>
                            <span className="ml-2">
                              {isOpen ? (
                                <HiMinus className="w-5 h-5 text-blue-600" />
                              ) : (
                                <HiPlus className="w-5 h-5 text-blue-600" />
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <p
                              id={`desc-${topic.replace(/\s+/g, "-")}`}
                              className="mt-2 text-gray-600 text-sm"
                            >
                              {syllabusDescriptions[topic] || "No additional description."}
                            </p>
                          )}
                        </li>
                      );
                    })
                  ) : (
                    <li className="p-4">No syllabus available.</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right: Course Image & Action Tabs */}
        <div className="flex flex-col items-center space-y-4">
          {/* Course Info Section */}
          <div className="w-full bg-gray-100 rounded-lg p-4 text-gray-800 space-y-2">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={400}
              className="w-full rounded-lg shadow-md object-cover"
              priority
              unoptimized
            />
            <div className="flex justify-between">
              <span className="font-semibold">Level</span>
              <span>Beginner to Expert</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Duration</span>
              <span>12 weeks</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Enrolled</span>
              <span>62 Students</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Lesson</span>
              <span>3 Lessons</span>
            </div>
          </div>

          {/* Action Tab Headers */}
          <div className="flex space-x-4 border-b w-full justify-center">
            <button
              onClick={() => setActionTab("enroll")}
              className={`py-2 px-4 font-semibold transition-colors ${
                actionTab === "enroll"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Enroll
            </button>
            <button
              onClick={() => setActionTab("inquiry")}
              className={`py-2 px-4 font-semibold transition-colors ${
                actionTab === "inquiry"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Inquiry
            </button>
          </div>

          {/* Action Tab Content */}
          <div className="w-full border rounded-lg p-4 shadow">
            {actionTab === "enroll" && (
              <form>
                <h3 className="text-lg font-semibold mb-4">Enroll Form</h3>
                <div className="mb-3">
                  <label htmlFor="enroll-name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="enroll-name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="enroll-email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="enroll-email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Enroll Now
                </button>
              </form>
            )}
            {actionTab === "inquiry" && (
              <form>
                <h3 className="text-lg font-semibold mb-4">Inquiry Form</h3>
                <div className="mb-3">
                  <label htmlFor="inquiry-name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inquiry-email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inquiry-message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={4}
                    placeholder="Your inquiry message"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
