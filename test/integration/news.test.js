const request = require('supertest');
const { app } = require('../../index');

describe('News Tests', () => {

  it('Should return a 200 OK status code when adding match news via a POST request to /add/news, with an expected response body', async () => {
    const postData = {
      title: 'Match News',
      description: 'Match News Description',
      matchId: 1
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

  it('Should return a 200 OK status code when adding sport news via a POST request to /add/news, with an expected response body', async () => {
    const postData = {
      title: 'Sport News',
      description: 'Sport News Description',
      sportId: 1
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

  it('Should return a 200 OK status code when finding matchId=1 news via a GET request to /match/news?id=1, with an expected response body', async () => {
    const response = await request(app)
      .get('/match/news?id=1');

    expect(response.status).toBe(200);
  });

  it('Should return a 200 OK status code when finding tourId=1 news via a GET request to /tour/news?id=1', async () => {
    const response = await request(app)
      .get('/tour/news?id=1');

    expect(response.status).toBe(200);
  });

  it('Should return a 200 OK status code when finding sportId=1 news via a GET request to /sport/news?id=1', async () => {
    const response = await request(app)
      .get('/sport/news?id=1');

    expect(response.status).toBe(200);
  });
});
