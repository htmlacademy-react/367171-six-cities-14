import HistoryRouter from './history-route';
import {LoginPage} from '../pages/LoginPage/login-page';
import {createMemoryHistory} from 'history';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {FavoritesPage} from '../pages/FavoritesPage/favorites-page';
import {OfferPage} from '../pages/OfferPage/offer-page';
import {NotFoundPage} from '../pages/NotFoundPage/not-found-page';
import {MainPage} from '../pages/MainPage/main-page';
import {Route, Routes} from 'react-router-dom';

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const firstCity = 'Paris';
    const sixthCity = 'Dusseldorf';

    render(<HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/offer/1" element={<OfferPage/>}/>
      </Routes>
    </HistoryRouter>
    );

    expect(history.location.pathname).toBe('/');

    expect(screen.getByText(firstCity)).toBeInTheDocument();
    expect(screen.getByText(sixthCity)).toBeInTheDocument();

    // этот тест не проходит
    fireEvent.click(screen.getByText('Waterfront with extraordinary view'));
    await waitFor(() => expect(window.location.pathname).toBe('/offer/1'));
  });


  it('should render "AuthScreen" when user navigate to "/login"', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });
    render(<HistoryRouter history={history}><LoginPage/></HistoryRouter>);
    expect(history.location.pathname).toBe('/login');
    expect(screen.getByText('Страница авторизации')).toBeInTheDocument();
  });

  it('should render "OfferScreen" when user navigate to "/offers/:id"', () => {
    const history = createMemoryHistory({ initialEntries: ['/offers/32'] });
    render(<HistoryRouter history={history}><OfferPage/></HistoryRouter>);
    expect(history.location.pathname).toBe('/offers/32');
    expect(screen.getByText('Cтраница гостиницы')).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    const history = createMemoryHistory({ initialEntries: ['/favorites'] });
    render(<HistoryRouter history={history}><FavoritesPage/></HistoryRouter>);

    expect(history.location.pathname).toBe('/favorites');
    expect(screen.getByText('Избранное')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', async () => {
    const history = createMemoryHistory({ initialEntries: ['*'] });
    const expectedText = 'Page Not Found';
    const expectedLinkText = 'Come back to main page';
    const logoTestId = 'logo';
    const rootPath = '/';

    render(
      <HistoryRouter history={history}>
        <NotFoundPage/>
      </HistoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
    expect(screen.getByTestId(logoTestId)).toBeInTheDocument();

    fireEvent.click(screen.getByText(expectedLinkText));
    await waitFor(() => expect(window.location.pathname).toBe(rootPath));

    fireEvent.click(screen.getByTestId(logoTestId));
    await waitFor(() => expect(window.location.pathname).toBe(rootPath));

  });
});
