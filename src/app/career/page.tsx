import { JobCard } from '@/components/JobCard';

const jobListings = [
  {
    title: 'Frontend Developer',
    location: 'Kathmandu, Nepal (Onsite)',
    type: 'Full-Time',
    description: 'Work with React/Next.js to build scalable frontend systems.',
  },
  {
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Develop and maintain PHP APIs with MySQL databases.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Hybrid - Kathmandu',
    type: 'Contract',
    description: 'Design modern UI/UX for web and mobile applications.',
  },
];

export default function CareerPage() {
  return (
    <main className="p-6 md:p-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re building products that help people—and we’re looking for passionate, creative minds to join us.
        </p>
      </section>

      <section className="space-y-6">
        {jobListings.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </section>

      <section className="mt-16 bg-orange-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Don't see a position for you?</h2>
        <p className="text-gray-600 mb-4">We're always open to talent. Drop your resume and we’ll reach out when there’s a match!</p>
        <a href="mailto:careers@yourcompany.com" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          Send Resume
        </a>
      </section>
    </main>
  );
}
