const request = require('supertest');
const { app } = require('../../index');

describe('Health Tests', () => {

  it('should return a 200 OK status code for GET request to /health', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toBe(200);
  });
});
