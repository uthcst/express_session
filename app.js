const express = require('express');
const port = process.env.port || 4000;
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(cookieParser());
app.use(session({
  'secret': '343ji43j4n3jn4jk3n',
  resave: true,
  saveUninitialized: true
}))

app.use('/', express.static('www'));
app.get('/getSession', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});
app.listen(port, function () {
  console.log('Server is running at ', port);
});