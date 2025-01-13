import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, } from "~~/components/ui/card";
import { Badge } from "~~/components/ui/badge";

interface NewsCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
}

export const NewsCard = ({
    title,
    description,
    image,
    category,

}: NewsCardProps) => {
    return (
        <Card
        className={`card-background transition-all duration-300 h-full text-white`}
        >
            <CardHeader className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
                <CardTitle className="text-xl font-bold">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="line-clamp-2">{description}</p>
                <Badge
                key={category}
                variant="secondary"
                className="bg-emerald-900 text-emerald-400"
              >
                {category}
              </Badge>
            </CardContent>
        </Card>
    );
};