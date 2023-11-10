import { useState } from 'react';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';
import { LocationItems } from '../../entities/location/constants';

export const Tabs = () => {

  //FIXME: вынести в константы, когда переключение табов будет полностью
  const defaultActiveKey = 1;

  const [isActiveKey, setActiveKey] = useState<number>(defaultActiveKey);

  const handleClick = (evt: MouseEvent) => {
    if (evt.target instanceof HTMLElement) {
      setActiveKey(Number(evt.target.id));
    }
  };

  return (
    <>
      <TabsNav items={LocationItems} activeKey={isActiveKey} defaultActiveKey={defaultActiveKey} onClick={handleClick}/>
      <TabsContent/>
    </>
  );
};
