import React from 'react';
import Container from 'react-bootstrap/Container';
import NewsCard from '../components/NewsCard';
import Breadcrumbs from '../components/Breadcrumbs';
import {Link} from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Article = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <article className='mb-6'>
          <div className="d-flex justify-content-between align-items-center mb-4 mb-md-5">
            <h1 className="h3 mb-0">Что нужно знать перед установкой кондиционера?</h1>
            <Link to="/blog" className='btn-1'>Назад</Link>
          </div>
          <div className="text">
            <img src="imgs/img7.jpg" alt="Что нужно знать перед установкой кондиционера?" />
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et qua atque corrupti quos dolores et qua atque corrupti quos dolores et qua</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
          </div>
        </article>

        <section className='sec-8 mb-6'>
          <div className="title mb-4 mb-md-5">
            <h2>Другие статьи</h2>
          </div>

          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              576: {
                spaceBetween: 15,
                slidesPerView: 2
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 3
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 3
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 4
              },
              1400: {
                spaceBetween: 55,
                slidesPerView: 4
              },
            }}
          >
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </main>
  );
};

export default Article;