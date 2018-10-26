export const getVersionNotification = (version: string = ''): string =>
  `Current app version: ${version}`;

export const formatTime = ({ dateTime, type }: { dateTime: string, type: string }): string => {
  const [date, time] = dateTime.split('T');

  return `Current ${type} time: ${date.split('-')
    .reverse()
    .join('.')} ${cleanupTime(time)}`;
};

export const cleanupTime = (time: string) =>
  time.replace(/[Z+-].*/i, '');
