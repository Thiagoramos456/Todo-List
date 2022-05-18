const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/index');
const { correctTaskMock } = require('./mocks/postTask');
const connection = require('../src/models/connection');

const { expect } = chai;

describe('PUT /tasks/:id', () => {
  let res;

  describe('Quando a task é editada com sucesso', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves();
      res = await chai.request(app).post('/tasks').send(correctTaskMock);
    });

    it('O status deve ser 200 OK', () => {
      expect(res).to.have.status(200);
    });

    it('O retorno deve ser conter um objeto com uma mensagem', () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de sucesso', () => {
      expect(res.body.message).to.be.equal('Tarefa alterada com sucesso');
    });

    after(() => {
      TaskModel.create.restore();
    });
  });
});
