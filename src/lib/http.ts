import request = require('request');
import Promise from 'bluebird';
import L from './/logger'

export default function http() {

  let sendGET = (path: string): any => {
    L.info(`Sending HTTP GET to: ${path}`);
    let opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'GET',
      json: true,
      timeout: 25000
    };

    request(opts, (err: string, data: any) => {
      if (err) {
        L.error(err);
        return Promise.reject(new Error(err));
      }

      L.info(`HTTP GET response successful to: ${path}`);
      return Promise.resolve(data.body);
    });
  };

  let sendGET_BY = (path: string, id: String) => {
    L.info(`Sending HTTP GET_BY to: ${path} for id: ${id}`);
    let opts = {
      url: `${process.env.BASE_URL}${path}:${id}`,
      method: 'GET',
      json: true,
      timeout: 25000
    };

    request(opts, (err: string, data: any) => {
      if (err) {
        L.error(err);
        return Promise.reject(new Error(err));
      }

      L.info(`HTTP GET_BY response successful to: ${path}`);
      return Promise.resolve(data.body);
    });
  };

  let sendPOST = (path: string, data: any) => {
    L.info(`Sending HTTP POST to: ${path}`);
    let opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'POST',
      json: true,
      timeout: 25000,
      body: data
    };

    request(opts, (err: string, data: any) => {
      if (err) {
        L.error(err);
        return Promise.reject(new Error(err));
      }

      L.info(`HTTP POST response successful to: ${path}`);
      return Promise.resolve(data.body);
    });
  };

  let sendPUT = (path: string, body: any) => {
    L.info(`Sending HTTP PUT to: ${path}`);
    let opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'PUT',
      json: true,
      timeout: 25000,
      body: body
    };

    request(opts, (err: string, data: any) => {
      if (err) {
        L.error(err);
        return Promise.reject(new Error(err));
      }

      L.info(`HTTP PUT response successful to: ${path}`);
      return Promise.resolve(data.body);
    });
  };

  return {
    sendGET: sendGET,
    sendGET_BY: sendGET_BY,
    sendPOST: sendPOST,
    sendPUT: sendPUT
  };
}
