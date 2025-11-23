import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedArticle {
  title: string;
  link: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-heading">
            Articole conexe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} to={article.link}>
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-heading line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-text-custom mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-accent font-medium">
                      Citește articolul
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
