import classnames from 'classnames';
import { FC} from 'react';
import { LocationItemProps } from '../../types';
import './location-item.css';

export const LocationItem: FC<LocationItemProps> = ({activeKey, id, title, onClick}) => (
  <li className="locations__item">
    <button id={String(id)}
      className={classnames('locations__item-link tabs__item', {['tabs__item--active']: activeKey === id})} onClick={onClick}
    >
      {title}
    </button>
  </li>
);
