const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/index');

const { expect } = chai;

describe('POST /tasks', () => {
  let res;

  describe('Quando a task é criada com sucesso', () => {
    before(async () => {
      res = await chai.request(app).post('/tasks');
    });

    it('O status deve ser 201 CREATED', async () => {
      expect(res).to.have.status(201);
    });

    it('O retorno deve ser conter um objeto com uma mensagem', async () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de sucesso', async () => {
      expect(res.body.message).to.be.equal('Tarefa criada com sucesso');
    });

    after(() => {
      connection.execute.restore();
    });
  });
});
