import Image from "next/image";

export default function AboutUs() {
  return (
    <>
    <section className="w-full bg-white py-16 min-h-[100vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-12 items-stretch">
        {/* Column 1: Large Square + Small Square (shorter) */}
        <div className="flex flex-col w-full md:w-1/4 gap-6">
          <div className="w-72 h-72 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/video-editing.jpg"
              alt="Large Square"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-44 h-44 relative rounded-lg overflow-hidden shadow-md ml-auto">
            <Image
              src="/images/video-editing.jpg"
              alt="Small Square"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Column 2: Tall Rectangle (full height) */}
        <div className="w-full md:w-1/2 flex">
          <div className="w-full relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/video-editing.jpg"
              alt="Tall Rectangle"
              fill
              style={{ objectFit: "cover" }}
              className="h-full"
            />
          </div>
        </div>

        {/* Column 3: Text Content (full height) */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          {/* Row 1: About Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              We are committed to empowering individuals with the skills and knowledge needed to excel in the fast-paced world of technology. Our comprehensive training programs, led by experienced professionals, cover a wide range of topics including software development, IT management, and cutting-edge technologies. Whether you’re a beginner or an experienced professional looking to upskill, Agile Institute offers hands-on learning to help you achieve your career goals in the tech industry. Join us and start your journey toward a brighter, more agile future.
            </p>
          </div>

          {/* Row 2: 20+ Courses */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-600">20+ Courses</h3>
            <p className="text-gray-700 text-sm">
              You can start and finish one of these popular courses in under our site
            </p>
          </div>

          {/* Row 3: 200+ Students */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">200+ Students</h3>
            <p className="text-gray-700">
              You can start and finish one of these popular courses in under our site
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full pb-16">
  <div className="max-w-7xl mx-auto px-6 md:px-30">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
      
      {/* Left Column: Heading */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Learn from industry experts and get certified by the market's leading
        </h2>
      </div>

      {/* Right Column: Stats */}
     <div className="flex flex-row gap-12 md:justify-center md:w-1/2 items-center">
  <div className="text-center">
    <h3 className="text-4xl font-bold text-blue-600">582</h3>
    <p className="text-gray-700 mt-2">Learners</p>
  </div>

  {/* Vertical Line */}
  <div className="w-px h-16 bg-gray-300" />

  <div className="text-center">
    <h3 className="text-4xl font-bold text-blue-600">24</h3>
    <p className="text-gray-700 mt-2">Courses</p>
  </div>
</div>


    </div>
  </div>
</section>



    </>
    
  );
}
