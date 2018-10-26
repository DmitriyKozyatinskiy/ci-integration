import { getVersionNotification } from '../utils';

test('Version notification should be related to current version', () => {
  expect(getVersionNotification('v0.0.1')).toBe('Current app version: v0.0.1');
});
