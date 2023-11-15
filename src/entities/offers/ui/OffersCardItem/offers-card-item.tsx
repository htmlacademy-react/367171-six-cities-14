import { FC } from 'react';
import { OfferListItemProps } from '../../types';
import { RoutePath } from '../../../../routes/routes';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {getByRatingStars, getByTypeRoom} from '../../utils/utils';

export const OffersCardItem:FC<OfferListItemProps> = ({id, price, title, previewImage, type, rating, isPremium, isFavorite}) => {

  const typeRoom = getByTypeRoom(type);

  const ratingStars = getByRatingStars(rating);

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classnames('place-card__bookmark-button button ', {['place-card__bookmark-button--active']: isFavorite})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${RoutePath.offers}/${id}`} className="place-card__link">{title}</Link>
        </h2>
        <p className="place-card__type">{typeRoom}</p>
      </div>
    </article>
  );
};
