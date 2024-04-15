// test/test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Login functionality', () => {
  it('should return "Login Successful" for valid credentials', (done) => {
    chai.request(app)
      .post('/login')
      .send({ username: 'admin', password: 'password' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Login Successful');
        done();
      });
  });

  it('should return 401 for invalid credentials', (done) => {
    chai.request(app)
      .post('/login')
      .send({ username: 'invalid', password: 'invalid' })
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.text).to.equal('Invalid username or password');
        done();
      });
  });
});

