import CryptoJS from 'crypto-js';


const md5Hash = CryptoJS.MD5('Valantis_20240303').toString();

export const headers = {
  'content-type': 'application/json',
  'X-Auth': md5Hash,
};
