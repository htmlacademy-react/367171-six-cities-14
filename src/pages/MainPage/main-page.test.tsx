import {withHistory} from '../../routes/history-route';
import { render } from '@testing-library/react';
import {MainPage} from './main-page';

describe('Component: MainPage', () => {
  it('should render correctly', () => {

    render(withHistory(<MainPage />));

  });
});
