const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/index');
const { correctAlterMock } = require('./mocks/editTask');
const TaskModel = require('../src/models/TaskModel');

const { expect } = chai;

describe('PUT /tasks', () => {
  let res;

  describe('Quando a task é excluída com sucesso', () => {
    before(async () => {
      sinon.stub(TaskModel, 'exclude').resolves();
      res = await chai.request(app).put('/tasks').send(correctAlterMock);
    });

    it('O status deve ser 200 OK', () => {
      expect(res).to.have.status(200);
    });

    it('O retorno deve ser conter um objeto com uma mensagem', () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de sucesso', () => {
      expect(res.body.message).to.be.equal('Tarefa excluída com sucesso');
    });

    after(() => {
      TaskModel.exclude.restore();
    });
  });
});
