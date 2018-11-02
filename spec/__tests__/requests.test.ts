import axios from 'axios';
import { getCurrentESTTime, getCurrentCETTime, getCurrentUTCTime } from '../../src/requests';
import { URL_EST_TIME, URL_CET_TIME, URL_UTC_TIME } from '../../src/constants';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Requests', () => {
  it('Should response with correct time EST time', async () => {
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

    expect(time).toEqual('2018-10-26T06:21-04:00');
  });

  it('Should response with the correct CET time', async () => {
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
    expect(time).toEqual('2018-10-26T17:15+02:00');
  });

  it('Should response with the correct UTC time', async () => {
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
    expect(time).toEqual('2018-10-26T16:04Z');
  });
});
