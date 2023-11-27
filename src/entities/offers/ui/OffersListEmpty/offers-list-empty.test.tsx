import {render, screen} from '@testing-library/react';
import {withHistory} from '../../../../routes/history-route';
import {OffersListEmpty} from './offers-list-empty';
it('Component: OffersListEmpty should render correctly', () => {

  const mockText = 'No places to stay available';
  const mockCurrentCity = 'Dusseldorf';
  const mockDescription = `We could not find any property available at the moment in ${mockCurrentCity}`;

  render(withHistory(<OffersListEmpty currentLocation={mockCurrentCity}/>));

  expect(screen.getByText(mockText)).toBeInTheDocument();
  expect(screen.getByText(mockDescription)).toBeInTheDocument();
});
