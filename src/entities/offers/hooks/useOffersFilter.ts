import {useEffect, useState} from 'react';
import {DEFAULT_LOCATION} from '../../location/constants/constants';
import {OfferListItemProps} from '../types/types';
import {getByCityOffers} from '../utils/utils';
import {useAppDispatch, useAppSelector} from "../../../providers/store-provider.tsx";
import {getOffers} from "../model/selectors.ts";
import {countOffers} from "../../../features/Tabs/model/slice.ts";

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
      const filteredOffers = getByCityOffers(offers, currentCity)
      setFilteredData(filteredOffers);
      dispatch(countOffers({countOffers: filteredOffers.length }));
    }
  }, [offers, currentCity, setFilteredData]);

  return filteredData;
};
