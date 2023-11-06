import {render, screen} from '@testing-library/react';
import {OffersCardItem} from "./offers-card-item";

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

    render(<OffersCardItem {...mockItem}/>);

    expect(screen.getByText('The house among olive')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });
  it('should correctly following a link', async () => {

    const mockItem = {
      previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
      title: 'The house among olive ',
      isFavorite: true,
      isPremium: true,
      rating: 4.3,
      type: 'room',
      price: 171,
      id: 66,
    };


    render(<OffersCardItem {...mockItem}/>);
    userEvent.click(screen.getByText(mockItem.title))
    await waitFor(() => expect(window.location.pathname).toBe('/offer/66'))
  });
});
