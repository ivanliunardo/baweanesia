import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a rel={'external'} className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h6 className='cards__item__location'>{props.location}</h6>
            <h5 className='cards__item__price'>{props.price}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
