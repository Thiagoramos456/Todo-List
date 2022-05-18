import * as sinon from 'sinon';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

chai.use(chaiHttp);

import { app } from '../app';
import tasksMock from './mocks/tasks';

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