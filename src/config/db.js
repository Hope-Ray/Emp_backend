require("dotenv").config();

const mysql = require("mysql2");
const postgres = require('postgres');


//

const sql = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${process.env.ENDPOINT_ID}`,
  },
});
//

async function getPgVersion() {
  const result = await sql`CREATE TABLE IF NOT EXISTS Employee (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(255) NOT NULL,
    emp_mail VARCHAR(255) UNIQUE,
    emp_designation VARCHAR(100),
    emp_joining_date DATE
  );`;}
  getPgVersion();



