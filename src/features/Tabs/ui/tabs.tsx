import {MouseEventHandler, useState} from 'react';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';
import {DEFAULT_LOCATION_KEY, LocationItems} from '../../../entities/location/constants';

export const Tabs = () => {

  const [currentActiveKey, setActiveKey] = useState<number>(DEFAULT_LOCATION_KEY);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (evt.target instanceof HTMLElement) {
      const {id} = evt.target;
      setActiveKey(Number(id));
    }
  };

  return (
    <>
      <TabsNav items={LocationItems} activeKey={currentActiveKey} defaultActiveKey={DEFAULT_LOCATION_KEY} onClick={handleClick}/>
      <TabsContent activeKey={currentActiveKey}/>
    </>
  );
};
