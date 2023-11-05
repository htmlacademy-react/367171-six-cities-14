import classnames from 'classnames';
import { FC, useRef} from 'react';
import { LocationItemProps } from '../../types';

export const LocationItem: FC<LocationItemProps> = ({activeKey, id, title, onClick}) => {

  const locationRef = useRef(null);

  return (
    <li className="locations__item">
      <a id={String(id)}
        ref={locationRef}
        className={classnames('locations__item-link tabs__item', {['tabs__item--active']: activeKey === id})}
        href="#"
        // как верно описать тип у ссылки?
        onClick={onClick}
      >
        <span>{title}</span>
      </a>
    </li>
  );
};
