import React from 'react';
import Container from 'react-bootstrap/Container';
import NewsCard from '../components/NewsCard';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleImg from '../assets/imgs/article-img.png'

const Blog = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-8 mb-6'>
          <div className="title blog">
            <h1 className='h2'>Новости </h1>
            <img src={ArticleImg} alt="article-img" />
          </div>

          <ul className='list-unstyled row row-cols-2 row-cols-md-3 row-cols-xl-4 gy-4 gy-sm-5 gx-3 gx-lg-4 gx-xxl-5'>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
            <li>
              <NewsCard />
            </li>
          </ul>
        </section>
      </Container>
    </main>
  );
};

export default Blog;