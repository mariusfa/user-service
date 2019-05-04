import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server'; // By importing the app, the server will startup
import User from '../models/user.server.model';

chai.use(chaiHttp);

describe('User', () => {

  const test_user = "test";
  const test_password = "test123";
  let token = "";

  before((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe('/ hello', () => {
    it('It should get hello world', (done) => {
      chai.request('http://localhost:3001')
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('/ post user register', () => {
    it('It should be able to register user', (done) => {
      chai.request('http://localhost:3001')
        .post('/api/auth/register')
        .set('Content-Type', 'application/json')
        .send({
          username: test_user,
          password: test_password
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done()
        })
    });
  });

  describe('/ post user login', () => {
    it('It should be able to login user', (done) => {
      chai.request('http://localhost:3001')
        .post('/api/auth/signin')
        .set('Content-Type', 'application/json')
        .send({
          username: test_user,
          password: test_password
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          token = res.body.token;
          done()
        })
    });
  });

  describe('/ post user validate', () => {
    it('It should be able to validate user', (done) => {
      chai.request('http://localhost:3001')
        .post('/api/auth/validate')
        .set('Content-Type', 'application/json')
        .send({
          token: token
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done()
        })
    });
  });

});
