import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import deleteIcon from '../assets/static/delete.png';
import '../assets/styles/components/CarouselItem.scss';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {

  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />

          {isList ? (
            <img
              className='carousel-item__details--img'
              src={deleteIcon}
              onClick={() => handleDeleteFavorite(id)}
              alt='delete button'
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              onClick={handleSetFavorite}
              alt='Plus Icon'
            />
          )}

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDisplatchtoProps = {
  setFavorite, deleteFavorite,
};

export default connect(null, mapDisplatchtoProps)(CarouselItem);
