import { ArticleAPI } from '@/entities/Article';
import ArticlesStyle from './Articles.module.scss';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

export function Articles({ articles }: { articles: ArticleAPI[] }) {
  return (
    <div className={ArticlesStyle.articles}>
      {articles.map((article) => (
        <div className={ArticlesStyle.article} key={uuidv4()}>
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
  );
}
