import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.USERNAME);
export default () => ({
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
});
