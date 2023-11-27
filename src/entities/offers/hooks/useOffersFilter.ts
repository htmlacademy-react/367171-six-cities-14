import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../providers';
import {OfferListItemProps} from '../types';
import {DEFAULT_LOCATION} from '../../location/constants';
import {countOffers, getOffers} from '../model';
import {getByCityOffers} from '../utils';

export const useOffersFilter = (currentLocation: string) => {
  const [filteredData, setFilteredData] = useState<OfferListItemProps[]>([]);
  const [currentCity, setCurrentCity] = useState(DEFAULT_LOCATION ? DEFAULT_LOCATION : currentLocation);
  const dispatch = useAppDispatch();
  const {items, isLoading} = useAppSelector(getOffers);
  const [offers, setOffers] = useState<OfferListItemProps[]>();

  useEffect(() => {
    if (currentCity !== currentLocation) {
      setCurrentCity(currentLocation);
    }
  }, [currentLocation, currentCity, setCurrentCity]);

  useEffect(() => {
    if (isLoading) {
      setOffers(items);
    }
  }, [isLoading, items, currentCity, setFilteredData]);

  useEffect(() => {
    if (offers && currentCity) {
      const filteredOffers = getByCityOffers(offers, currentCity);
      setFilteredData(filteredOffers);
      dispatch(countOffers({countOffers: filteredOffers.length }));
    }
  }, [offers, currentCity, setFilteredData, dispatch]);

  return filteredData;
};
