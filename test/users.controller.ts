import { describe, it } from 'mocha'
import { expect } from 'chai'
import request from 'supertest'
import Server from '../src'

describe('Users', () => {
  it('should get all Users', () =>
    request(Server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(2)
      }))

  it('should add a new users', () =>
    request(Server)
      .post('/api/v1/users')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test')
      }))

  it('should get a user by id', () =>
    request(Server)
      .get('/api/v1/users/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test')
      }))
})
