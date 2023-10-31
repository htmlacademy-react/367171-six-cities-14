import { MouseEventHandler, useState } from 'react';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';
import { LocationItems } from '../../entities/location/constants';

export const Tabs = () => {

  //FIXME: вынести в константы, когда переключение табов будет полностью
  const defaultActiveKey = 1;

  const [isActiveKey, setActiveKey] = useState<number>(defaultActiveKey);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const element = evt.target as HTMLElement;
    if (element.tagName === 'SPAN' && element.parentElement) {
      setActiveKey(Number(element.parentElement.id));
    }
    if (element.tagName === 'A') {
      setActiveKey(Number(element.id));
    }
  };

  return (
    <>
      <TabsNav items={LocationItems} activeKey={isActiveKey} defaultActiveKey={defaultActiveKey} onClick={handleClick}/>
      <TabsContent/>
    </>
  );
};
