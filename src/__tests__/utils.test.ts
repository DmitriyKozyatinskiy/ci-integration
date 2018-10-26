import { getVersionNotification, formatTime, cleanupTime } from '../utils';

describe('Utils', () => {
  it('Should generated correct version string', () => {
    expect(getVersionNotification('v0.0.1')).toBe('Current app version: v0.0.1');
  });

  it('Should format data and time correctly', () => {
    expect(formatTime({ dateTime: '2018-10-26T09:01-04:00', type: 'EST' }))
      .toBe('Current EST time: 26.10.2018 09:01');

    expect(formatTime({ dateTime: '2018-10-26T15:01+02:00', type: 'CET' }))
      .toBe('Current CET time: 26.10.2018 15:01');

    expect(formatTime({ dateTime: '2018-10-26T13:01Z', type: 'UTC' }))
      .toBe('Current UTC time: 26.10.2018 13:01');
  });

  it('Should cleanup time from unnecessary data', () => {
    expect(cleanupTime('09:01-04:00')).toBe('09:01');
    expect(cleanupTime('15:01+02:00')).toBe('15:01');
    expect(cleanupTime('13:01Z')).toBe('13:01');
  });
});
