import {render, screen} from '@testing-library/react';
import {OffersCardItem} from "./offers-card-item";
import {withHistory} from "../../../../routes/history-route";
import {OffersList} from "./offers-list";

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const mockData = [
      {
        'city': {
          'name': 'Dusseldorf',
          'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg'
        ],
        'title': 'The house among olive ',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.5,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 3,
        'price': 142,
        'goods': ['Laptop friendly workspace'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
        'location': {'latitude': 51.241402, 'longitude': 6.782314, 'zoom': 16},
        'id': 8
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg'
        ],
        'title': 'House in countryside',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.3,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 2,
        'price': 178,
        'goods': [
          'Air conditioning',
          'Baby seat',
          'Breakfast',
          'Dishwasher',
          'Laptop friendly workspace',
          'Fridge',
          'Washer',
          'Coffee machine',
          'Washing machine',
          'Towels'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        'location': {
          'latitude': 53.555341000000006,
          'longitude': 9.975654,
          'zoom': 16
        },
        'id': 9
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg'
        ],
        'title': 'House in countryside',
        'isFavorite': false,
        'isPremium': false,
        'rating': 3.9,
        'type': 'house',
        'bedrooms': 2,
        'maxAdults': 4,
        'price': 332,
        'goods': ['Laptop friendly workspace', 'Washer', 'Breakfast'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {
          'latitude': 53.574341000000004,
          'longitude': 10.022654000000001,
          'zoom': 16
        },
        'id': 10
      },
      {
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
      },
      {
        'city': {
          'name': 'Amsterdam',
          'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg'
        ],
        'title': 'Nice, cozy, warm big bed apartment',
        'isFavorite': false,
        'isPremium': true,
        'rating': 3.1,
        'type': 'hotel',
        'bedrooms': 3,
        'maxAdults': 8,
        'price': 101,
        'goods': [
          'Dishwasher',
          'Breakfast',
          'Towels',
          'Laptop friendly workspace',
          'Air conditioning',
          'Fridge',
          'Coffee machine',
          'Baby seat',
          'Washer'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
        'location': {
          'latitude': 52.364540000000005,
          'longitude': 4.9019759999999994,
          'zoom': 16
        },
        'id': 12
      },
    ];

    const mockText = `${mockData.length} places to stay in Amsterdam`;
    const offersContainerTestId = 'offers-list';

    render(withHistory(<OffersList data={mockData}/>));

    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByTestId(offersContainerTestId)).toBeInTheDocument();
  });
});
