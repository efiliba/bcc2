const config = {};

if (process.env.NODE_ENV === 'production') {
  config.apiUrl = 'http://bcc-api.appspot.com';
} else {
  config.apiUrl = 'http://localhost:8001';
//   config.apiUrl = 'http://14.202.155.38';
}

export default config;
export const apiUrl = config.apiUrl;
