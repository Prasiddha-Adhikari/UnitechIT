type JobProps = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export const JobCard = ({ title, location, type, description }: JobProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{location} · {type}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={`mailto:careers@yourcompany.com?subject=Application for ${encodeURIComponent(title)}`}
        className="inline-block mt-4 text-orange-600 font-medium hover:underline"
      >
        Apply Now →
      </a>
    </div>
  );
};
