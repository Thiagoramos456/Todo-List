const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/index');
const tasksMock = require('./mocks/tasks');

const { expect } = chai;

describe('GET /tasks', () => {
  
  it('Deve retornar todas as tasks', async () => {
    const getAllStub = sinon.stub();
    getAllStub.returns(tasksMock);

    const controller = {
      getAll: getAllStub
    };

    const server = app(controller);

    const res = await chai.request(server)
      .get('/tasks');

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.length(3);
  });

});