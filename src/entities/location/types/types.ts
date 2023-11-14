import { MouseEventHandler } from 'react';

export type LocationItemProps = {
  activeKey: number;
  id: number;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
