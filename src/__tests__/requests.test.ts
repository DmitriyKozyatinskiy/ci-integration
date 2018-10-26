import axios from 'axios';
import {
  getCurrentESTTime,
  getCurrentCETTime,
  getCurrentUTCTime,
} from '../requests';
import {
  URL_EST_TIME,
  URL_CET_TIME,
  URL_UTC_TIME,
} from '../constants';

jest.mock('axios');

it('EST time request should response with correct time', async () => {
  const response = {
    data: {
      currentDateTime: '2018-10-26T06:21-04:00',
    },
  };

  // @ts-ignore
  axios.get.mockResolvedValue(response);

  const time = await getCurrentESTTime();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(URL_EST_TIME);

  expect(time).toEqual('Current EST time: 2018-10-26T06:21-04:00');
});

it('CET time request should response with the correct time', async () => {
  const response = {
    data: {
      currentDateTime: '2018-10-26T17:15+02:00',
    },
  };

  // @ts-ignore
  axios.get.mockResolvedValue(response);

  const time = await getCurrentCETTime();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(URL_CET_TIME);
  expect(time).toEqual('Current CET time: 2018-10-26T17:15+02:00');
});
it('UTC time request should response with the correct time', async () => {
  const response = {
    data: {
      currentDateTime: '2018-10-26T16:04Z',
    },
  };

  // @ts-ignore
  axios.get.mockResolvedValue(response);

  const time = await getCurrentUTCTime();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(URL_UTC_TIME);
  expect(time).toEqual('Current UTC time: 2018-10-26T16:04Z');
});