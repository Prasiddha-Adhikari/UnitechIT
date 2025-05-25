import Image from "next/image";

export default function GrabTheBest() {
  return (
    <section className="w-full bg-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-20 bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80">
            <Image
              src="/images/video-editing.jpg" // replace with your actual image path
              alt="Promotion"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              GRAB THE BEST OF
            </h2>
            <p className="text-lg md:text-xl text-black mb-6 max-w-xl">
              Level up your career with industry-relevant training. Secure your seat at Agile Institute today!
            </p>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
