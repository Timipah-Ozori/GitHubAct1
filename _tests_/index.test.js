const request = require('supertest');
const { app, server } = require('../index'); // Import both app and server

describe('GET /', () => {
  it('should return "Hello, world!"', async () => {
    const response = await request(app).get('/'); // Send a GET request to '/'
    expect(response.status).toBe(200); // Check if status is 200
    expect(response.text).toBe('Hello, world!'); // Check if response body is "Hello, world!"
  });
});

// Close the server after all tests are done
afterAll(() => {
  server.close(); // Close the server to prevent Jest from hanging
});

