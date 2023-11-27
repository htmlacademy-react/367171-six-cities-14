import {getByCityOffers, getByRatingStars, getByTypeRoom} from './utils';

describe('getByTypeRoom', () => {
  it('getByTypeRoom', () => {
    const expectedText = getByTypeRoom('apartment');
    const equalText = 'Apartment';
    expect(expectedText).toEqual(equalText);
  });
});
describe('getByRatingStars', () => {
  it('getByRatingStarsInPercent downward', () => {
    const expectedPercent = getByRatingStars(3.1);
    const equalPercent = '60%';
    expect(expectedPercent).toEqual(equalPercent);
  });
  it('getByRatingStarsInPercent upward', () => {
    const expectedPercent = getByRatingStars(4.6);
    const equalPercent = '100%';
    expect(expectedPercent).toEqual(equalPercent);
  });
  it('getByRatingStarsInPercent in the middle', () => {
    const expectedPercent = getByRatingStars(1.5);
    const equalPercent = '40%';
    expect(expectedPercent).toEqual(equalPercent);
  });
});

describe('getByCityOffers', () => {
  const mockOffers = [
    {
      'city': {
        'name': 'Paris',
        'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/11.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg'
      ],
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.2,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 2,
      'price': 138,
      'goods': ['Laptop friendly workspace', 'Breakfast'],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
      'location': {
        'latitude': 48.858610000000006,
        'longitude': 2.330499,
        'zoom': 16
      },
      'id': 35
    },
    {
      'city': {
        'name': 'Hamburg',
        'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/3.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/14.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg'
      ],
      'title': 'Canal View Prinsengracht',
      'isFavorite': false,
      'isPremium': false,
      'rating': 4,
      'type': 'apartment',
      'bedrooms': 2,
      'maxAdults': 6,
      'price': 226,
      'goods': [
        'Towels',
        'Laptop friendly workspace',
        'Air conditioning',
        'Baby seat',
        'Washer',
        'Breakfast'
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
        'longitude': 9.994654,
        'zoom': 16
      },
      'id': 36
    },
    {
      'city': {
        'name': 'Amsterdam',
        'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg'
      ],
      'title': 'Wood and stone place',
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.4,
      'type': 'house',
      'bedrooms': 5,
      'maxAdults': 7,
      'price': 422,
      'goods': [
        'Breakfast',
        'Towels',
        'Fridge',
        'Baby seat',
        'Washer',
        'Laptop friendly workspace',
        'Dishwasher',
        'Air conditioning'
      ],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
      'location': {'latitude': 52.37854, 'longitude': 4.894976, 'zoom': 16},
      'id': 37
    },
    {
      'city': {
        'name': 'Cologne',
        'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/9.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg',
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/14.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg'
      ],
      'title': 'The Joshua Tree House',
      'isFavorite': false,
      'isPremium': false,
      'rating': 3,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 1,
      'price': 268,
      'goods': ['Washer', 'Breakfast', 'Laptop friendly workspace'],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
      'location': {'latitude': 50.954361, 'longitude': 6.982974, 'zoom': 16},
      'id': 38
    },
    {
      'city': {
        'name': 'Cologne',
        'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/5.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/14.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg'
      ],
      'title': 'Canal View Prinsengracht',
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.7,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 1,
      'price': 284,
      'goods': ['Laptop friendly workspace', 'Washer', 'Breakfast'],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
      'location': {'latitude': 50.930361, 'longitude': 6.937974, 'zoom': 16},
      'id': 39
    },
    {
      'city': {
        'name': 'Brussels',
        'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg',
        'https://14.react.pages.academy/static/offer/19.jpg'
      ],
      'title': 'Perfectly located Castro',
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.3,
      'type': 'house',
      'bedrooms': 2,
      'maxAdults': 9,
      'price': 909,
      'goods': [
        'Laptop friendly workspace',
        'Baby seat',
        'Breakfast',
        'Air conditioning',
        'Washer'
      ],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
      'location': {'latitude': 50.869557, 'longitude': 4.332697, 'zoom': 16},
      'id': 40
    },
    {
      'city': {
        'name': 'Paris',
        'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/3.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/5.jpg',
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg'
      ],
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'isFavorite': false,
      'isPremium': true,
      'rating': 4.8,
      'type': 'house',
      'bedrooms': 2,
      'maxAdults': 5,
      'price': 199,
      'goods': [
        'Towels',
        'Washer',
        'Baby seat',
        'Laptop friendly workspace',
        'Breakfast',
        'Air conditioning'
      ],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
      'location': {'latitude': 48.87861, 'longitude': 2.357499, 'zoom': 16},
      'id': 41
    },
    {
      'city': {
        'name': 'Brussels',
        'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/14.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/12.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/4.jpg',
        'https://14.react.pages.academy/static/offer/18.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/20.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg'
      ],
      'title': 'Wood and stone place',
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.1,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 1,
      'price': 142,
      'goods': [
        'Laptop friendly workspace',
        'Air conditioning',
        'Towels',
        'Breakfast',
        'Washer',
        'Baby seat'
      ],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
      'location': {
        'latitude': 50.833557,
        'longitude': 4.374696999999999,
        'zoom': 16
      },
      'id': 42
    },
    {
      'city': {
        'name': 'Paris',
        'location': {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13}
      },
      'previewImage': 'https://14.react.pages.academy/static/offer/16.jpg',
      'images': [
        'https://14.react.pages.academy/static/offer/2.jpg',
        'https://14.react.pages.academy/static/offer/16.jpg',
        'https://14.react.pages.academy/static/offer/3.jpg',
        'https://14.react.pages.academy/static/offer/8.jpg',
        'https://14.react.pages.academy/static/offer/10.jpg',
        'https://14.react.pages.academy/static/offer/6.jpg',
        'https://14.react.pages.academy/static/offer/13.jpg',
        'https://14.react.pages.academy/static/offer/14.jpg',
        'https://14.react.pages.academy/static/offer/9.jpg',
        'https://14.react.pages.academy/static/offer/17.jpg',
        'https://14.react.pages.academy/static/offer/11.jpg',
        'https://14.react.pages.academy/static/offer/7.jpg',
        'https://14.react.pages.academy/static/offer/1.jpg',
        'https://14.react.pages.academy/static/offer/15.jpg'
      ],
      'title': 'Wood and stone place',
      'isFavorite': false,
      'isPremium': false,
      'rating': 2.2,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 2,
      'price': 118,
      'goods': ['Breakfast', 'Laptop friendly workspace'],
      'host': {
        'id': 25,
        'name': 'Angelina',
        'isPro': true,
        'avatarUrl': 'img/avatar-angelina.jpg'
      },
      'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
      'location': {'latitude': 48.83861, 'longitude': 2.350499, 'zoom': 16},
      'id': 43
    },
  ];
  it('getByCityOffers Amsterdam', () => {
    const mockCurrentCity = 'Amsterdam';
    const expectedOffers = getByCityOffers(mockOffers, mockCurrentCity);
    expect(expectedOffers).toHaveLength(1);
    expect(expectedOffers).toBeInstanceOf(Array);
  });
  it('getByCityOffers empty list', () => {
    const mockCurrentCity = 'Berlin';
    const expectedOffers = getByCityOffers(mockOffers, mockCurrentCity);
    expect(expectedOffers).toHaveLength(0);
  });
  it('getByCityOffers Paris', () => {
    const mockCurrentCity = 'Paris';
    const expectedOffers = getByCityOffers(mockOffers, mockCurrentCity);
    expect(expectedOffers).toHaveLength(3);
  });
});

