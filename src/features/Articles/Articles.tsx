import { ArticleAPI } from '@/api/Article';
import ArticlesStyle from './Articles.module.scss';
import Image from 'next/image';

export function Articles({ articles }: { articles: ArticleAPI[] | null }) {
  return (
    <>
      {articles && (
        <div className={ArticlesStyle.articles}>
          {articles.map((article) => (
            <div className={ArticlesStyle.article} key={article.id}>
              {article.urlToImage ? (
                <img className={ArticlesStyle.img} src={article.urlToImage} />
              ) : (
                <Image
                  className={ArticlesStyle.img}
                  src='/no-image.jpg'
                  alt='Image is not found'
                  width={100}
                  height={350}
                />
              )}
              <h3 className={ArticlesStyle.title}>{article.title}</h3>
              <p className={ArticlesStyle.description}>{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
