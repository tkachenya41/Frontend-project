import { ArticleAPI } from '@/api/Article';
import Style from './Article.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Article({
  articles,
  params,
}: {
  articles: ArticleAPI[] | null;
  params: { id: string };
}) {
  const filteredArticle = articles?.find((article) => article.id === params.id);

  return (
    <div>
      {filteredArticle && (
        <div className={Style.article}>
          <div className={Style.imageContainer}>
            {filteredArticle.urlToImage ? (
              <img className={Style.img} src={filteredArticle.urlToImage} />
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
            <h3>{filteredArticle.title}</h3>
            <p>
              <i>Author: </i>
              {filteredArticle.author}
            </p>
            <div className={Style.details}>
              {filteredArticle.publishedAt && (
                <p>
                  <i>Publication Time: </i>
                  {new Date(filteredArticle.publishedAt).toLocaleString()}
                </p>
              )}
              {filteredArticle.url && (
                <p>
                  <i>Source: </i>
                  <Link className={Style.link} href={filteredArticle.url} target='_blank'>
                    Link
                  </Link>
                </p>
              )}
            </div>
            <p>{filteredArticle.description}</p>
            <p>{filteredArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
