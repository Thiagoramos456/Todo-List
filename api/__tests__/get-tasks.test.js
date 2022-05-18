const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const connection = require('../src/models/connection');
const app = require('../src/index');

const tasksMock = require('./mocks/tasks');

const { expect } = chai;

describe('GET /tasks', () => {
  let res;

  before(async() => {
    sinon.stub(connection, 'execute').resolves([tasksMock]);
    res = await chai.request(app).get('/tasks');
  });
  
  it('O status deve ser 200 OK', async () => {
    expect(res).to.have.status(200);

    expect(res.body).to.be.deep.equal(tasksMock);
  });

  it('O retorno deve ser um array', async () => {
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.length(3);
  });

  it('O retorno deve ser um array de tasks', async () => {
    expect(res.body).to.be.deep.equal(tasksMock);
  });

  

});