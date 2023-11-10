import {withHistory} from '../../routes/history-route';
import {render, screen} from '@testing-library/react';
import {MainPage} from './main-page';

describe('Component: MainPage', () => {
  it('should render correctly', () => {

    const tabsTestId = 'tabs';
    const locationsContainerTestId = 'locations-container';
    const locationsListTestId = 'locations-list';

    const offersTestId = 'offers-list';
    const citiesTestId = 'cities';
    const citiesMapTestId = 'cities-map';

    render(withHistory(<MainPage />));

    expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsListTestId)).toBeInTheDocument();

    expect(screen.getByTestId(citiesTestId)).toBeInTheDocument();
    expect(screen.getByTestId(offersTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toHaveClass('cities__map map');

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toHaveClass('tabs__item--active');

  });
});
