const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/index');
const TaskModel = require('../src/models/TaskModel');
const {
  pendentMock,
  inexistentMock,
} = require('./mocks/statusChangeTask');

const { expect } = chai;

describe('PUT /tasks/status', () => {
  let res;

  describe('Quando a task muda o status', () => {
    before(async () => {
      sinon.stub(TaskModel, 'changeStatus').resolves(true);
      res = await chai.request(app).put('/tasks/status').send(pendentMock);
    });

    it('O status deve ser 200 OK', () => {
      expect(res).to.have.status(200);
    });

    it('O retorno deve ser conter um objeto com uma mensagem', () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de sucesso', () => {
      expect(res.body.message).to.be.equal('Status alterado com sucesso.');
    });

    after(() => {
      TaskModel.changeStatus.restore();
    });
  });

  describe('Quando a task não existe', () => {
    before(async () => {
      sinon.stub(TaskModel, 'changeStatus').resolves(false);
      res = await chai.request(app).put('/tasks/status').send(inexistentMock);
    });

    it('O status deve ser 404 NOT FOUND', () => {
      expect(res).to.have.status(404);
    });

    it('O retorno deve ser conter um objeto com uma mensagem', () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de erro', () => {
      expect(res.body.error).to.be.equal('Tarefa não encontrada.');
    });

    after(() => {
      TaskModel.changeStatus.restore();
    });
  });

});
