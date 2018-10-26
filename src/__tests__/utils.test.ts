import { getVersionNotification, formatTime } from '../utils';

test('Version notification should be related to current version', () => {
  expect(getVersionNotification('v0.0.1')).toBe('Current app version: v0.0.1');
});
it('Time formatting should work correctly', () => {
  expect(formatTime({ dateTime: '2018-10-26T09:01-04:00', type: 'EST' }))
    .toBe('Current EST time: 26.10.2018 09:01');

  expect(formatTime({ dateTime: '2018-10-26T15:01+02:00', type: 'CET' }))
    .toBe('Current CET time: 26.10.2018 15:01');

  expect(formatTime({ dateTime: '2018-10-26T13:01Z', type: 'UTC' }))
    .toBe('Current UTC time: 26.10.2018 13:01');
});