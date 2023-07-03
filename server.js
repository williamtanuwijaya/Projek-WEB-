const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res)=>{
  res.render('index');
});

app.get('/contact', (req, res)=>{
  res.render('contact');
});

app.get('/dasboard', (req, res)=>{
  res.render('dasboard');
});


app.get('/produk', (req, res)=>{
  res.render('produk');
});

app.get('/profile', (req, res)=>{
  res.render('profile');
});

app.listen(port, ()=>{
  console.log(`Server Ready... http://localhost:${port}`);
})

