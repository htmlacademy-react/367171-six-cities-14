import { createMemoryHistory } from 'history';
import LoginPage from '../pages/LoginPage';
import HistoryRouter from './history-route';
import { render } from 'react-dom';
import { expect } from 'vitest';

describe('Application Routing', () => {
  it('Should add login to start of pathname', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });

    render(<HistoryRouter history={history}><LoginPage/></HistoryRouter>, null);

    expect(history.location.pathname).toBe('/login');
  });

});
