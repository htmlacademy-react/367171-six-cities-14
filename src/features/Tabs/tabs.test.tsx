import {render, screen} from '@testing-library/react';
import {Tabs} from './tabs.tsx';
import {withHistory} from '../../routes/history-route.tsx';

describe('Component: Tabs', () => {
  it('should render correctly', () => {

    const tabsTestId = 'tabs';
    const locationsContainerTestId = 'locations-container';
    const locationsListTestId = 'locations-list';

    const offersTestId = 'offers-list';
    const citiesTestId = 'cities';
    const citiesMapTestId = 'cities-map';

    render(withHistory(<Tabs/>));

    expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(locationsListTestId)).toBeInTheDocument();

    expect(screen.getByTestId(citiesTestId)).toBeInTheDocument();
    expect(screen.getByTestId(offersTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toHaveClass('cities__map map');

  });
});
