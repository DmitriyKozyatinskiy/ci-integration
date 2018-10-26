import axios from 'axios';
import { getCurrentESTTime } from '../requests';
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

  axios.get.mockResolvedValue(response);

  const time = await getCurrentESTTime();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(URL_EST_TIME);

  expect(time).toEqual('2018-10-26T06:21-04:00');
});
