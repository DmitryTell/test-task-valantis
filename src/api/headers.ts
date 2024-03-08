import CryptoJS from 'crypto-js';

import { getCurrentDate } from '../helpers';


const currentDate = getCurrentDate();
const md5Hash = CryptoJS.MD5(`Valantis_${currentDate}`).toString();

export const headers = {
  'content-type': 'application/json',
  'X-Auth': md5Hash,
};
