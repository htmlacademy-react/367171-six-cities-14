import {getByRatingStars, getByTypeRoom} from "./utils";

describe("getByTypeRoom", () => {
  it('getByTypeRoom', () => {
    const expectedText = getByTypeRoom('apartment');
    const equalText = 'Apartment';
    expect(expectedText).toEqual(equalText);
  });
});

describe("getByRatingStars", () => {
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

