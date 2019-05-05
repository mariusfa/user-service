import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server'; // By importing the app, the server will startup
import { registerAdmin } from '../controllers/admin.server.controller';
import User from '../models/user.server.model';

chai.use(chaiHttp);

describe('User', () => {

  const test_user = "test";
  const test_password = "test123";
  let token = "";

  before((done) => {
    User.deleteOne({"username":test_user}, (err) => {
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

describe('Admin', () => {

  let token = "";

  describe('Admin loign' , () => {
    it('It should be able to login admin', (done) => {
      chai.request('http://localhost:3001')
        .post('/api/auth/signin')
        .set('Content-Type', 'application/json')
        .send({
          username: "admin",
          password: "admin"
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          token = res.body.token;
          done();
        })
    });
  })

  describe('List users' , () => {
    it('It should list users', (done) => {
      chai.request('http://localhost:3001')
        .get('/api/admin/list')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Search users', () => {
    it('It should search users', (done) => {
      chai.request('http://localhost:3001')
        .get('/api/admin/find')
        .query({user: 'Admin'})
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body.length).to.equal(1);
          done();
        });
    })
  })
})