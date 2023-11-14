import {render, screen} from '@testing-library/react';
import {OffersCardItem} from './offers-card-item';
import {withHistory} from '../../../../routes/history-route';

describe('Component: OfferCardItem', () => {
  it('should render correctly', () => {
    const mockItem = {
      'city': {
        'name': 'Dusseldorf',
        'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/5.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg'
      ],
      'title': 'Amazing and Extremely Central Flat',
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.7,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 2,
      'price': 236,
      'goods': ['Laptop friendly workspace'],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
      'location': {
        'latitude': 51.204402,
        'longitude': 6.7773140000000005,
        'zoom': 16
      },
      'id': 11
    };

    const mockPremium = 'Premium';

    render(withHistory(<OffersCardItem {...mockItem}/>));

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(mockItem.price).toBe(171);
    expect(screen.getByText(mockPremium)).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });
});
