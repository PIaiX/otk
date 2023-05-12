import React, {useState} from 'react';

const Quiz = () => {
  const [page, setPage] = useState(1);
  const count = 4;
  const arr = Array.from({ length: count }, (v, i) =>  i + 1); 
  console.log(arr);

  const isActive = (num) => (num === page ? 'active' : '')
  return (
    <div className='quiz'>
      <div className="quiz-pagination">
        <div className='mb-3'>Вопрос {page} из {count}</div>
        <div className="quiz-pagination-bullets">
          {
            arr.map(obj => <div key={obj} className={isActive(obj)}></div>)
          }
        </div>
      </div>
      <div className="quiz-top">
        <h3>Куда вы планируете поставить кондиционер?</h3>
      </div>
      <div className="quiz-main">
        vars
      </div>
    </div>
  );
};

export default Quiz;