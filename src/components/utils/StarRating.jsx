import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function StarRating(props) {
  const arr = [1, 2, 3, 4, 5]
  const num = Number(props.rate)
  const numRound = Math.round(Number(props.rate))
  return (
    <div className="star-rating">
      {arr.map((item) => {
        if (item <= num) {
          return <BsStarFill className="filled" key={item} />
        } else if (item === numRound) {
          return <BsStarHalf className="filled" key={item} />
        } else {
          return <BsStar key={item} />
        }
      })}
    </div>
  )
}