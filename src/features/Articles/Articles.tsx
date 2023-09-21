import { ArticleAPI } from "@/entities/Article";
import ArticlesStyle from "./Articles.module.scss";

export function Articles({ articles }: { articles: ArticleAPI[] }) {
  return (
    <div className={ArticlesStyle.articles}>
      {articles.map((article) => (
        <div className={ArticlesStyle.article} key={article.title}>
          <h5 className={ArticlesStyle.title}>{article.title}</h5>
          {article.urlToImage ? (
            <img className={ArticlesStyle.img} src={article.urlToImage} />
          ) : (
            <img className={ArticlesStyle.img} src="/no-image.jpeg"></img>
          )}
        </div>
      ))}
    </div>
  );
}
