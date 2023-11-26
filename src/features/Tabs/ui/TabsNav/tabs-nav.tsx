import { FC, MouseEventHandler} from 'react';
import LocationItem from '../../../../entities/location/ui/LocationItem';

type TabsNav = {
  activeKey: number;
  defaultActiveKey: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  items: {
    id: number;
    title: string;
  }[];
};

export const TabsNav: FC<TabsNav> = ({items, activeKey, defaultActiveKey, onClick}) => {

  const isActiveKey = activeKey ? activeKey : defaultActiveKey;

  return (
    <div className="tabs" data-testid="tabs">
      <section className="locations container" data-testid="locations-container">
        <ul className="locations__list tabs__list" data-testid="locations-list">
          {items.map(({id, title}) => <LocationItem activeKey={isActiveKey} key={id} id={id} title={title} onClick={onClick}/>)}
        </ul>
      </section>
    </div>
  );
};
