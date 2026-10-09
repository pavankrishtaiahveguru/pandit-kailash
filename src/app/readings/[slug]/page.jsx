import { notFound } from "next/navigation";
import ReadingDetailPage from "@/components/readings/ReadingDetailPage";
import { readingServices, readingServiceList } from "@/data/readingServices";

export function generateStaticParams() {
  return readingServiceList.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = readingServices[slug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Pandit Kailash`,
    description: service.shortDescription,
  };
}

export default async function ReadingPage({ params }) {
  const { slug } = await params;
  const service = readingServices[slug];

  if (!service) {
    notFound();
  }

  return <ReadingDetailPage service={service} />;
}
