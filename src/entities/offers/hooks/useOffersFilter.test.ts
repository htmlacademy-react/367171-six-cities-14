import {renderHook} from '@testing-library/react';
import {useOffersFilter} from './useOffersFilter';
describe('Hook: useOffersFilter', () => {
  it('should return empty array', () => {

    const mockOffers = [
      {
        'city': {
          'name': 'Amsterdam',
          'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg'
        ],
        'title': 'Perfectly located Castro',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.3,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 1,
        'price': 140,
        'goods': [
          'Dishwasher',
          'Washer',
          'Baby seat',
          'Towels',
          'Breakfast',
          'Coffee machine',
          'Fridge',
          'Laptop friendly workspace',
          'Air conditioning'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
        'location': {'latitude': 52.36354, 'longitude': 4.911976, 'zoom': 16},
        'id': 48
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/6.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg'
        ],
        'title': 'The house among olive ',
        'isFavorite': false,
        'isPremium': true,
        'rating': 3.1,
        'type': 'apartment',
        'bedrooms': 2,
        'maxAdults': 2,
        'price': 483,
        'goods': [
          'Baby seat',
          'Breakfast',
          'Laptop friendly workspace',
          'Towels',
          'Washer',
          'Fridge',
          'Air conditioning'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        'location': {
          'latitude': 53.558341000000006,
          'longitude': 10.001654,
          'zoom': 16
        },
        'id': 49
      },
      {
        'city': {
          'name': 'Amsterdam',
          'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg'
        ],
        'title': 'Penthouse, 4-5 rooms + 5 balconies',
        'isFavorite': false,
        'isPremium': true,
        'rating': 3,
        'type': 'house',
        'bedrooms': 2,
        'maxAdults': 6,
        'price': 128,
        'goods': ['Washer', 'Breakfast', 'Laptop friendly workspace'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
        'location': {
          'latitude': 52.37554,
          'longitude': 4.9019759999999994,
          'zoom': 16
        },
        'id': 50
      },
      {
        'city': {
          'name': 'Dusseldorf',
          'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg'
        ],
        'title': 'Wood and stone place',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.9,
        'type': 'house',
        'bedrooms': 1,
        'maxAdults': 4,
        'price': 317,
        'goods': [
          'Air conditioning',
          'Breakfast',
          'Fridge',
          'Laptop friendly workspace',
          'Baby seat',
          'Dishwasher',
          'Towels',
          'Washer',
          'Coffee machine'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        'location': {
          'latitude': 51.250402,
          'longitude': 6.7853140000000005,
          'zoom': 16
        },
        'id': 51
      },
      {
        'city': {
          'name': 'Dusseldorf',
          'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg'
        ],
        'title': 'Perfectly located Castro',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.5,
        'type': 'house',
        'bedrooms': 3,
        'maxAdults': 9,
        'price': 353,
        'goods': [
          'Breakfast',
          'Towels',
          'Baby seat',
          'Air conditioning',
          'Washer',
          'Laptop friendly workspace'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {'latitude': 51.243402, 'longitude': 6.791314, 'zoom': 16},
        'id': 52
      },
      {
        'city': {
          'name': 'Cologne',
          'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg'
        ],
        'title': 'Canal View Prinsengracht',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.6,
        'type': 'house',
        'bedrooms': 3,
        'maxAdults': 8,
        'price': 547,
        'goods': [
          'Washer',
          'Air conditioning',
          'Laptop friendly workspace',
          'Baby seat',
          'Breakfast'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {'latitude': 50.941361, 'longitude': 6.956974, 'zoom': 16},
        'id': 53
      },
      {
        'city': {
          'name': 'Paris',
          'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/4.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg'
        ],
        'title': 'Perfectly located Castro',
        'isFavorite': false,
        'isPremium': false,
        'rating': 3.6,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 2,
        'price': 123,
        'goods': ['Laptop friendly workspace', 'Breakfast'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {
          'latitude': 48.843610000000005,
          'longitude': 2.338499,
          'zoom': 16
        },
        'id': 54
      },
      {
        'city': {
          'name': 'Paris',
          'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/19.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg'
        ],
        'title': 'Loft Studio in the Central Area',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.1,
        'type': 'house',
        'bedrooms': 5,
        'maxAdults': 10,
        'price': 993,
        'goods': [
          'Fridge',
          'Laptop friendly workspace',
          'Coffee machine',
          'Towels',
          'Breakfast',
          'Cable TV',
          'Washer',
          'Dishwasher',
          'Baby seat',
          'Air conditioning',
          'Washing machine'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
        'location': {'latitude': 48.83961, 'longitude': 2.342499, 'zoom': 16},
        'id': 55
      },
      {
        'city': {
          'name': 'Cologne',
          'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/4.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg'
        ],
        'title': 'Penthouse, 4-5 rooms + 5 balconies',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.8,
        'type': 'house',
        'bedrooms': 4,
        'maxAdults': 4,
        'price': 149,
        'goods': [
          'Fridge',
          'Breakfast',
          'Laptop friendly workspace',
          'Washer',
          'Towels',
          'Air conditioning',
          'Baby seat'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
        'location': {'latitude': 50.934361, 'longitude': 6.943974, 'zoom': 16},
        'id': 56
      },
      {
        'city': {
          'name': 'Amsterdam',
          'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg'
        ],
        'title': 'Wood and stone place',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.3,
        'type': 'house',
        'bedrooms': 2,
        'maxAdults': 7,
        'price': 634,
        'goods': [
          'Washer',
          'Air conditioning',
          'Fridge',
          'Breakfast',
          'Towels',
          'Laptop friendly workspace',
          'Dishwasher',
          'Baby seat'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        'location': {
          'latitude': 52.35754,
          'longitude': 4.9179759999999995,
          'zoom': 16
        },
        'id': 57
      },
      {
        'city': {
          'name': 'Paris',
          'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg'
        ],
        'title': 'Wood and stone place',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.4,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 2,
        'price': 224,
        'goods': ['Laptop friendly workspace', 'Washer', 'Breakfast'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
        'location': {
          'latitude': 48.837610000000005,
          'longitude': 2.364499,
          'zoom': 16
        },
        'id': 58
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg'
        ],
        'title': 'Wood and stone place',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.5,
        'type': 'apartment',
        'bedrooms': 3,
        'maxAdults': 7,
        'price': 447,
        'goods': [
          'Washer',
          'Breakfast',
          'Laptop friendly workspace',
          'Fridge',
          'Baby seat',
          'Air conditioning',
          'Towels'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
        'location': {
          'latitude': 53.558341000000006,
          'longitude': 9.999654000000001,
          'zoom': 16
        },
        'id': 59
      },
      {
        'city': {
          'name': 'Dusseldorf',
          'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/3.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg'
        ],
        'title': 'Tile House',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.9,
        'type': 'house',
        'bedrooms': 3,
        'maxAdults': 5,
        'price': 561,
        'goods': ['Washer', 'Laptop friendly workspace', 'Breakfast'],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        'location': {
          'latitude': 51.217402,
          'longitude': 6.7693140000000005,
          'zoom': 16
        },
        'id': 60
      },
    ];

    const mockCurrentCity = 'Brussels';

    const {result} = renderHook(() => useOffersFilter(true, mockOffers, mockCurrentCity));

    expect(result.current).toHaveLength(0);
    expect(result.current).toBeInstanceOf(Array);
  });

  it('should return array with 3 element', () => {

    const mockOffers = [
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/12.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg'
        ],
        'title': 'Penthouse, 4-5 rooms + 5 balconies',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.5,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 2,
        'price': 159,
        'goods': [
          'Baby seat',
          'Washer',
          'Coffee machine',
          'Laptop friendly workspace',
          'Dishwasher',
          'Towels',
          'Air conditioning',
          'Fridge',
          'Breakfast'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
        'location': {
          'latitude': 53.565341000000004,
          'longitude': 9.978654,
          'zoom': 16
        },
        'id': 65
      },
      {
        'city': {
          'name': 'Brussels',
          'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg'
        ],
        'title': 'The house among olive ',
        'isFavorite': false,
        'isPremium': false,
        'rating': 3.1,
        'type': 'house',
        'bedrooms': 4,
        'maxAdults': 7,
        'price': 451,
        'goods': [
          'Baby seat',
          'Breakfast',
          'Air conditioning',
          'Laptop friendly workspace',
          'Washer'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
        'location': {'latitude': 50.854557, 'longitude': 4.364697, 'zoom': 16},
        'id': 66
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/3.jpg',
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg'
        ],
        'title': 'Nice, cozy, warm big bed apartment',
        'isFavorite': false,
        'isPremium': false,
        'rating': 4.6,
        'type': 'hotel',
        'bedrooms': 2,
        'maxAdults': 4,
        'price': 297,
        'goods': [
          'Towels',
          'Breakfast',
          'Coffee machine',
          'Baby seat',
          'Washing machine',
          'Dishwasher',
          'Laptop friendly workspace',
          'Washer',
          'Fridge',
          'Air conditioning'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        'location': {
          'latitude': 53.573341000000006,
          'longitude': 10.009654000000001,
          'zoom': 16
        },
        'id': 67
      },
      {
        'city': {
          'name': 'Cologne',
          'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/3.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/16.jpg',
          'https://14.react.pages.academy/static/offer/1.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg',
          'https://14.react.pages.academy/static/offer/20.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/8.jpg',
          'https://14.react.pages.academy/static/offer/15.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg'
        ],
        'title': 'Perfectly located Castro',
        'isFavorite': false,
        'isPremium': false,
        'rating': 3.4,
        'type': 'room',
        'bedrooms': 1,
        'maxAdults': 2,
        'price': 148,
        'goods': [
          'Air conditioning',
          'Dishwasher',
          'Washing machine',
          'Washer',
          'Breakfast',
          'Laptop friendly workspace',
          'Fridge',
          'Coffee machine',
          'Baby seat',
          'Towels'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {'latitude': 50.951361, 'longitude': 6.944974, 'zoom': 16},
        'id': 68
      },
      {
        'city': {
          'name': 'Hamburg',
          'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
        },
        'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
        'images': [
          'https://14.react.pages.academy/static/offer/9.jpg',
          'https://14.react.pages.academy/static/offer/11.jpg',
          'https://14.react.pages.academy/static/offer/13.jpg',
          'https://14.react.pages.academy/static/offer/17.jpg',
          'https://14.react.pages.academy/static/offer/5.jpg',
          'https://14.react.pages.academy/static/offer/6.jpg',
          'https://14.react.pages.academy/static/offer/4.jpg',
          'https://14.react.pages.academy/static/offer/18.jpg',
          'https://14.react.pages.academy/static/offer/7.jpg',
          'https://14.react.pages.academy/static/offer/12.jpg',
          'https://14.react.pages.academy/static/offer/2.jpg',
          'https://14.react.pages.academy/static/offer/19.jpg',
          'https://14.react.pages.academy/static/offer/10.jpg',
          'https://14.react.pages.academy/static/offer/14.jpg'
        ],
        'title': 'Tile House',
        'isFavorite': false,
        'isPremium': false,
        'rating': 2.6,
        'type': 'apartment',
        'bedrooms': 1,
        'maxAdults': 3,
        'price': 172,
        'goods': [
          'Breakfast',
          'Baby seat',
          'Laptop friendly workspace',
          'Air conditioning',
          'Fridge',
          'Towels',
          'Washer'
        ],
        'host': {
          'id': 25,
          'name': 'Angelina',
          'isPro': true,
          'avatarUrl': 'img/avatar-angelina.jpg'
        },
        'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
        'location': {
          'latitude': 53.563341,
          'longitude': 10.019654000000001,
          'zoom': 16
        },
        'id': 74
      },
    ];

    const mockCurrentCity = 'Hamburg';

    const {result} = renderHook(() => useOffersFilter(true, mockOffers, mockCurrentCity));

    expect(result.current).toHaveLength(3);
    expect(result.current).toBeInstanceOf(Array);
  });
});
