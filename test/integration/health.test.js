const request = require('supertest');
const { app } = require('../../index');

describe('Integration Tests', () => {

    it('Should return a 200 OK status code when adding tour news via a POST request to /add/news, with an expected response body', async () => {
        const postData = {
          title: 'Tour News',
          description: 'Tour News Description',
          tourId: 1
        };
    
        const expectedResponseBody = {
          status: 'Success',
          message: 'Added News Successfully'
        };
    
        const response = await request(app)
          .post('/add/news')
          .send(postData);
    
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponseBody);
      });
});