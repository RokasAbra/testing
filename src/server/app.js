const express = require('express')
const app = express()
const port = 3004
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_test",
  });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/scooters', (req, res) => {
  const sql = `
  INSERT INTO scooters
  (registrationCode, travelledDistance, lastUseDate, nextCheck)
  VALUES (?, ?, ?, ?)`;
  con.query(sql, [req.body.registrationCode, req.body.travelledDistance, req.body.lastUseDate, req.body.nextCheck], (err, result) => {
      if (err) throw err;
      res.send({result});
  });
});    
 // Read metodas get
app.get("/scooters", (req, res) => {
    const sql = ` 
      SELECT
      * 
      FROM scooters
    `;
    con.query(sql, (err, result) => {
      if (err) throw err;
  
      res.send(result);
    }); 
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})