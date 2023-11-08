import {render, screen} from '@testing-library/react';
import {OffersCardItem} from "./offers-card-item";
import {withHistory} from "../../../../routes/history-route";

describe('Component: OfferCardItem', () => {
  it('should render correctly', () => {
    const mockItem = {
      previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
      title: 'The house among olive',
      isFavorite: true,
      isPremium: true,
      rating: 4.3,
      type: 'room',
      price: 171
    };

    const mockPremium = mockItem.isPremium ? 'Premium' : null;

    render(withHistory(<OffersCardItem {...mockItem}/>));

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockPremium)).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });
});
