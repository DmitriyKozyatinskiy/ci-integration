export const getVersionNotification = (version: string = ''): string =>
  `Current app version: ${version}`;

export const formatDate = (date: string): string =>
  date.split('T')[0].split('-').reverse().join('.');
