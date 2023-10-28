import { FC} from 'react';
import LocationItem from '../../../entities/location/ui/LocationItem';

type TabsNav = {
  activeKey: number;
  defaultActiveKey: number;
  onClick: (evt: MouseEvent) => void;
  items: {
    id: number;
    title: string;
  }[];
};

export const TabsNav: FC<TabsNav> = ({items, activeKey, defaultActiveKey, onClick}) => {

  const isActiveKey = activeKey ? activeKey : defaultActiveKey;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map(({id, title}) => <LocationItem activeKey={isActiveKey} key={id} id={id} title={title} onClick={onClick}/>)}
        </ul>
      </section>
    </div>
  );
};
