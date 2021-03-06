import * as http from 'http';

import { formatTime, getVersionNotification } from './utils';
import { getCurrentESTTime, getCurrentCETTime, getCurrentUTCTime } from './requests';

const { HOSTNAME = '0.0.0.0', PORT = '3000', VERSION } = process.env;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const appVersionNotification = getVersionNotification(VERSION);

  const [estTime, cetTime, utcTime] = await Promise.all([
    getCurrentESTTime(),
    getCurrentCETTime(),
    getCurrentUTCTime(),
  ]);

  res.end(`
    ${appVersionNotification}

    ${formatTime({ dateTime: estTime, type: 'EST' })}
    ${formatTime({ dateTime: cetTime, type: 'CET' })}
    ${formatTime({ dateTime: utcTime, type: 'UTC' })}
  `);
});

// @ts-ignore
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
