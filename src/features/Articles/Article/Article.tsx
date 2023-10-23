import { ArticleAPI } from '@/api/Article';
import Style from './Article.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Article({
  articles,
  article,
  params,
}: {
  articles: ArticleAPI[];
  article: ArticleAPI;
  params: { id: string };
}) {
  return (
    <div>
      {article && (
        <div className={Style.article}>
          <div className={Style.imageContainer}>
            {article.urlToImage ? (
              <img className={Style.img} src={article.urlToImage} />
            ) : (
              <Image
                className={Style.img}
                src='/no-image.jpg'
                alt='Image is not found'
                width={100}
                height={350}
              />
            )}
          </div>
          <div className={Style.text}>
            <h3>{article.title}</h3>
            <p>
              <i>Author: </i>
              {article.author}
            </p>
            <div className={Style.details}>
              {article.publishedAt && (
                <p>
                  <i>Publication Time: </i>
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              )}
              {article.url && (
                <p>
                  <i>Source: </i>
                  <Link className={Style.link} href={article.url} target='_blank'>
                    Link
                  </Link>
                </p>
              )}
            </div>
            <p>{article.description}</p>
            <p>{article.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
