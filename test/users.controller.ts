import { describe, it } from 'mocha'
import { expect } from 'chai'
import request from 'supertest'
import Server from '../src'

describe('Images', () => {
  it('should get all Images', () =>
    request(Server)
      .get('/api/v1/images')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(2)
      }))

  it('should get an image by id', () =>
    request(Server)
      .get('/api/v1/images/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test')
      }))
})
