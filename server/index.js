const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const mysql = require("mysql");
const cors = require("cors");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "templates",
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//테스트
app.get("/", (req, res) => {
  res.send("Hello NodeMon");
  connection.query("SELECT * FROM user", function (error, results, fields) {
    if (error) throw error;
    console.log("The USER_ID", results.id);
  });
});

//회원가입
app.post("/signup", (req, res) => {
  console.log(req.body);

  //아이디 있는지 확인 필요합니다.
  connection.query(
    "INSERT INTO user(user_email, password) values (?, ?)",
    [req.body.email, req.body.password],
    function (err, result, fields) {
      if (err) {
        console.log("회원가입 실패 1");
        throw err;
      }
      console.log("COM");
      // res.send(result);
    }
  );
});

//로그인
app.post("/signin", (req, res) => {
  console.log(req.body);

  connection.query(
    "SELECT EXISTS (SELECT id_num FROM user WHERE user_email = (?) AND password = (?)) as success",
    [req.body.email, req.body.password],
    function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        res.json(result[0].success);
      }
      //회원정보 불일치
      // if (result[0].success == 0) {
      //   console.log("UserInfo not correct / Login fail");
      //   res.send("Fail");
      // } else {
      //   res.send("Success");
      //   console.log("UserInfo correct / Login complete");
      // }
    }
  );
});

//사용자마다 다른 url제공
app.get("/api/hello", (req, res) => {
  res.send({ msg: "Hello Express !" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// connection.end();

// REST API
// 웹프로토콜을 기반으로 하여 효과적으로 데이터를 주고 받을 수 있게 함.
// 그럼 궁금한거 ?
// 웹프로토콜이란 ? AJAX란 ? ajax-fetch ?
// 기계와 기계가 규격화된 방식으로 통신함
// HTTP로 통신
// 정보 가공 방법 > CRUD >> method 라고 부른다
// Create > post
// Read > get
// Delete > delete
// Update > put | patch
// resource / collection / elements
//
