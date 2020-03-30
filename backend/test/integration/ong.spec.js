const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();//limpa testes executados
    await connection.migrate.latest(); //executa migrate teste
  })

  afterAll(async () => {
    await connection.destroy();
  })


  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
        name: "Abetarda",
        email: "contacto@gmail.com",
        whatsapp: "4700000000",
        city: "Castro Verde",
        postal_cod: "7780-126"      
    })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(6);

  })
})