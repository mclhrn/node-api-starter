import Promise from 'bluebird'
import { l } from './logger'
import request from 'request'

export default function http() {
  const sendGET = (path: string): any => {
    l.info(`Sending HTTP GET to: ${path}`)
    const opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'GET',
      json: true,
      timeout: 25000
    }

    request(opts, (err: string, data: any) => {
      if (err) {
        l.error(err)
        return Promise.reject(err)
      }

      l.info(`HTTP GET response successful to: ${path}`)
      return Promise.resolve(data.body)
    })
  }

  const sendGetBY = (path: string, id: string) => {
    l.info(`Sending HTTP GET_BY to: ${path} for id: ${id}`)
    const opts = {
      url: `${process.env.BASE_URL}${path}:${id}`,
      method: 'GET',
      json: true,
      timeout: 25000
    }

    request(opts, (err: string, data: any) => {
      if (err) {
        l.error(err)
        return Promise.reject(err)
      }

      l.info(`HTTP GET_BY response successful to: ${path}`)
      return Promise.resolve(data.body)
    })
  }

  const sendPOST = (path: string, data: any) => {
    l.info(`Sending HTTP POST to: ${path}`)
    const opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'POST',
      json: true,
      timeout: 25000,
      body: data
    }

    request(opts, (err: string, data: any) => {
      if (err) {
        l.error(err)
        return Promise.reject(err)
      }

      l.info(`HTTP POST response successful to: ${path}`)
      return Promise.resolve(data.body)
    })
  }

  const sendPUT = (path: string, body: any) => {
    l.info(`Sending HTTP PUT to: ${path}`)
    const opts = {
      url: `${process.env.BASE_URL}${path}`,
      method: 'PUT',
      json: true,
      timeout: 25000,
      body: body
    }

    request(opts, (err: string, data: any) => {
      if (err) {
        l.error(err)
        return Promise.reject(err)
      }

      l.info(`HTTP PUT response successful to: ${path}`)
      return Promise.resolve(data.body)
    })
  }

  return {
    sendGET: sendGET,
    sendGetBY: sendGetBY,
    sendPOST: sendPOST,
    sendPUT: sendPUT
  }
}
