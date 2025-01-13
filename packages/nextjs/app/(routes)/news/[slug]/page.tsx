import Image from "next/image";
import { getNewsData } from "~~/lib/newsData";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPage({params}: NewsPageProps) {
  const {slug} = await params;
  const news = getNewsData(slug);

  if (!news) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-4xl font-bold text-white">{news.title}</h2>
  
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
        <Image
          src={news.image}
          alt={`${news.title} gameplay screenshot`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <p className="text-gray-300 leading-relaxed text-lg">
        {news.description}
      </p>
    </div>
  );
}