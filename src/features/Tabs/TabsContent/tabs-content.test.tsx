import {render, screen} from '@testing-library/react';
import {TabsContent} from './tabs-content';
import {withHistory} from '../../../routes/history-route';

describe('Component: TabsContent', () => {
  it('should render correctly', () => {
    const mockActiveKey = 2;
    const expectedText = 'Cologne';

    render(withHistory(<TabsContent activeKey={mockActiveKey}/>));

    const offersTestId = 'offers-list';
    const citiesTestId = 'cities';
    const citiesMapTestId = 'cities-map';

    expect(screen.getByTestId(citiesTestId)).toBeInTheDocument();
    expect(screen.getByTestId(offersTestId)).toBeInTheDocument();
    expect(expectedText).toMatch('Cologne');
    expect(expectedText).not.toMatch('Hamburg');
    expect(screen.getByTestId(citiesMapTestId)).toBeInTheDocument();
    expect(screen.getByTestId(citiesMapTestId)).toHaveClass('cities__map map');
  });
});
