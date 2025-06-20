import CoursePageClient from "./CoursesPageClient"; // adjust path

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

const allCourses = [
  "ASP .NET Core Training in Nepal",
  "Advanced React.js Training in Nepal",
  "Python with Django Training in Nepal",
  "MERN Stack Training in Kathmandu, Nepal",
  "Video Editing Training in Nepal",
  "UI/UX Design Training in Nepal",
  "Web Design Training in Nepal",
  "Graphic Design Training in Nepal",
  "Digital Marketing Training in Nepal",
  "DevOps Engineering Training in Nepal",
];

export async function generateStaticParams() {
  return allCourses.map((name) => ({
    slug: slugify(name),
  }));
}

export default async function Page({ params }: Props) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  return <CoursePageClient slug={slug} />;
}
