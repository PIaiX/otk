import React, {useState} from 'react';
import Apartment from '../assets/imgs/apartment.jpg'
import House from '../assets/imgs/house.jpg'
import Office from '../assets/imgs/office.jpg'
import Conditioner1 from '../assets/imgs/conditioner1.png'
import Conditioner2 from '../assets/imgs/conditioner2.png'
import Conditioner3 from '../assets/imgs/conditioner3.png'

const Quiz = () => {
  const [page, setPage] = useState(1);
  const count = 4;
  const arr = Array.from({ length: count }, (v, i) =>  i + 1); 
  console.log(arr);

  const isActive = (num) => (num === page ? 'active' : '')
  return (
    <form className='quiz'>
      <div className="quiz-pagination">
        <h5>Вопрос {page} из {count}</h5>
        <div className="quiz-pagination-bullets">
          {
            arr.map(obj => <div key={obj} className={isActive(obj)}></div>)
          }
        </div>
      </div>

      {
        (page === 1) && 
        <>
          <div className="quiz-top">
            <h3>Куда вы планируете поставить кондиционер?</h3>
          </div>
          <div className="quiz-main">
            <button type='button' className='btn-1 me-4' disabled>Назад</button>
            <ul className="flex-1 list-unstyled row row-cols-3 gx-3 gx-xxl-4 gx-xxxl-5">
              <li>
                <label className='variant'>
                  <input type="radio" name='placement' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Квартира</h3>
                    <img src={Apartment} alt="Квартира" />
                  </div>
                </label>
              </li>
              <li>
                <label className='variant'>
                  <input type="radio" name='placement' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Дом</h3>
                    <img src={House} alt="Дом" />
                  </div>
                </label>
              </li>
              <li>
                <label className='variant'>
                  <input type="radio" name='placement' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Офис</h3>
                    <img src={Office} alt="Офис" />
                  </div>
                </label>
              </li>
            </ul>
            <button type='button' className='btn-1 ms-4' onClick={() => setPage(2)}>Далее</button>
          </div>
        </>
      }

      {
        (page === 2) && 
        <>
          <div className="quiz-top">
            <h3>Выберите площадь помещения</h3>
          </div>
          <div className="quiz-main">
            <button type='button' className='btn-1 me-4' onClick={() => setPage(1)}>Назад</button>
            <ul className="flex-1 list-unstyled row row-cols-3 g-3 gx-xxl-4 gx-xxxl-5 gy-xxl-4">
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 20 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 30 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 40 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 50 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 60 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 70 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 80 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>до 100 кв.м.</h5>
                  </div>
                </label>
              </li>
              <li>
                <label className='variant-2'>
                  <input type="radio" name='square' hidden/>
                  <div className='variant-2-visual'>
                    <h5 className='text-center mb-0'>свыше 100 кв.м.</h5>
                  </div>
                </label>
              </li>
            </ul>
            <button type='button' className='btn-1 ms-4' onClick={() => setPage(3)}>Далее</button>
          </div>
        </>
      }
      
      {
        (page === 3) && 
        <>
          <div className="quiz-top">
            <h3>Какой тип кондиционера хотите установить?</h3>
          </div>
          <div className="quiz-main">
            <button type='button' className='btn-1 me-4' onClick={() => setPage(2)}>Назад</button>
            <ul className="flex-1 list-unstyled row row-cols-3 gx-3 gx-xxl-4 gx-xxxl-5">
              <li>
                <label className='variant'>
                  <input type="radio" name='conditioner' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Настенная сплит-система</h3>
                    <img src={Conditioner1} className='object-fit-contain' alt="Настенная сплит-система" />
                  </div>
                </label>
              </li>
              <li>
                <label className='variant'>
                  <input type="radio" name='conditioner' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Мультисплит система</h3>
                    <img src={Conditioner2} className='object-fit-contain' alt="Мультисплит система" />
                  </div>
                </label>
              </li>
              <li>
                <label className='variant'>
                  <input type="radio" name='conditioner' hidden/>
                  <div className='variant-visual'>
                    <h3 className='text-center'>Кассетный кондиционер</h3>
                    <img src={Conditioner3} className='object-fit-contain' alt="Кассетный кондиционер" />
                  </div>
                </label>
              </li>
            </ul>
            <button type='button' className='btn-1 ms-4' onClick={() => setPage(4)}>Далее</button>
          </div>
        </>
      }

      {
        (page === 4) && 
        <>
          <div className="quiz-top">
            <h3>Скидка 10% уже ждет вас</h3>
          </div>
          <div className="quiz-main">
            <div className='py-5'>
              <h3>Оставьте контактные данные и менеджер перезвонит вам </h3>
              <div className="d-flex fs-12 mb-2">
                <input type="tel" placeholder='+7 ___-___-__-__' className='me-5'/>
                <input type="text" placeholder='Имя' className='me-5'/>
                <button type='button' className="btn-1 fw-6">Отправить</button>
              </div>
              <p>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных</p>
            </div>
          </div>
        </>
      }
    </form>
  );
};

export default Quiz;