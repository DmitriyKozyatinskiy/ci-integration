import * as dotenv from 'dotenv';
import * as http from 'http';

import {
  getVersionNotification,
} from './utils';
import {
  getCurrentESTTime,
  getCurrentCETTime,
  getCurrentUTCTime,
} from './requests';

dotenv.config();

const { HOSTNAME = '127.0.0.1', PORT = '8000', VERSION } = process.env;

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
    ${estTime}
    ${cetTime}
    ${utcTime}
  `);
});

// @ts-ignore
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
