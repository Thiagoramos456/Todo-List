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

  describe('Quando há tasks', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves([tasksMock]);
      res = await chai.request(app).get('/tasks');
    });

    it('O status deve ser 200 OK', async () => {
      expect(res).to.have.status(200);
    });

    it('O retorno deve ser um array', async () => {
      expect(res.body).to.be.an('array');
    });

    it('O retorno deve ser um array de tasks', async () => {
      expect(res.body).to.be.deep.equal(tasksMock);
    });

    after(() => {
      connection.execute.restore();
    });
  });

  describe('Quando não há tasks', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves([]);
      res = await chai.request(app).get('/tasks');
    });

    it('O status deve ser 404 NOT FOUND', async () => {
      expect(res).to.have.status(404);
    });

    it('O retorno deve ser um objeto com o erro', async () => {
      expect(res.body).to.be.an('object');
    });

    it('O retorno deve ser uma mensagem de erro', async () => {
      expect(res.body.error).to.be.equal('Nenhuma task encontrada');
    });

    after(() => {
      connection.execute.restore();
    });
  });
});
