import {useEffect, useState} from 'react';
import {DEFAULT_LOCATION} from '../../location/constants/constants';
import {OfferListItemProps} from '../types/types';
import {getByCityOffers} from '../utils/utils';

export const useOffersFilter = (isDataLoaded = true, data: OfferListItemProps[], currentLocation: string) => {
  const [filteredData, setFilteredData] = useState([]);
  const [currentCity, setCurrentCity] = useState(DEFAULT_LOCATION ? DEFAULT_LOCATION : currentLocation);

  useEffect(() => {
    if (currentCity !== currentLocation) {
      setCurrentCity(currentLocation);
    }
  }, [currentLocation, currentCity, setCurrentCity]);

  useEffect(() => {
    if (isDataLoaded && currentCity) {
      setFilteredData(getByCityOffers(data, currentCity));
    }
  }, [isDataLoaded, data, currentCity, setFilteredData]);

  return filteredData;
};
