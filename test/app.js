const request = require('supertest');
const app = require('../app.js');

describe('GET /api', () => {
    it('should return 200 OK and JSON', (done)=>{
        request(app)
            .get('/api')
            .expect('Content-Type', /json/) 
            .expect(200, done)
    }); 
});

describe('GET /api/remoteAPI', () => {
    it('should return 200 OK and JSON', (done)=>{
        request(app)
            .get('/api/remoteAPI')
            .expect('Content-Type', /json/) 
            .expect(200, done)
    }); 
});
describe('GET /api/remoteAPI?currency=EUR', () => {
    it('should return 200 OK and JSON', (done)=>{
        request(app)
            .get('/api/remoteAPI?currency=EUR')
            .expect('Content-Type', /json/) 
            .expect(200, done)
    }); 
});