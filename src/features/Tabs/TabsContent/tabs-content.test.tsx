import {render, screen} from '@testing-library/react';
import {TabsContent} from './tabs-content';
import {withHistory} from '../../../routes/history-route';

describe('Component: TabsContent', () => {
  it('should render correctly', () => {

    render(withHistory(<TabsContent/>));

    const offersTestId = 'offers-list';
    const citiesTestId = 'cities';
    const citiesMapTestId = 'cities-map';

    expect(screen.getByTestId(citiesTestId)).toBeInTheDocument();
    expect(screen.getByTestId(offersTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toHaveClass('cities__map map');
  });
});
