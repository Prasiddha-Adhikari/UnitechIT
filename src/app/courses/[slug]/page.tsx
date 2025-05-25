type PageProps = {
  params: { slug: string };
};

// You can reuse slugify or create a "deslugify" function to show nice titles:
function deslugify(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter of each word
}

export default function CoursePage({ params }: PageProps) {
  const title = deslugify(params.slug);

  // You can fetch more data here if you want using the slug
  // For now, just show the course title:
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p>This is the course detail page for <strong>{title}</strong>.</p>
      {/* Add more course details here */}
    </main>
  );
}
