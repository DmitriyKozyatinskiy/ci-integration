import axios, { AxiosResponse } from 'axios';

import {
  URL_EST_TIME,
  URL_UTC_TIME,
  URL_CET_TIME,
} from './constants';

interface TimeResponseInterface {
  currentDateTime: string;
}

export const getCurrentESTTime = async (): Promise<string> => {
  const { data }: AxiosResponse<TimeResponseInterface> = await axios.get(URL_EST_TIME);

  return data.currentDateTime;
};

export const getCurrentUTCTime = async (): Promise<string> => {
  const { data }: AxiosResponse<TimeResponseInterface> = await axios.get(URL_UTC_TIME);

  return data.currentDateTime;
};

export const getCurrentCETTime = async (): Promise<string> => {
  const { data }: AxiosResponse<TimeResponseInterface> = await axios.get(URL_CET_TIME);

  return data.currentDateTime;
};
