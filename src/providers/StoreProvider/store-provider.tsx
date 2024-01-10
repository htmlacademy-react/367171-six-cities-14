import {Provider} from 'react-redux';
import {FC, ReactNode} from 'react';
import {store} from './store';

export const StoreProvider: FC<{children: ReactNode}> = ({children}) => <Provider store={store}>{children}</Provider>;
