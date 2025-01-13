import Link from "next/link";
import { NewsCard } from "~~/components/news/NewsCard";
import { news } from "~~/lib/newsData";


export default function GamesPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((newsItem) => (
            <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
              <NewsCard
              {...newsItem}
              />
            </Link>
          ))}

        </div>
      </main>
    </div>
  );
}
