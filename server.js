const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// قراءة جميع الكتب
app.get('/books', (req, res) => {
  fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('حدث خطأ أثناء قراءة البيانات');
      return;
    }
    const books = JSON.parse(data);
    res.json(books);
  });
});

// إضافة كتاب جديد
app.post('/add-book', express.json(), (req, res) => {
  const newBook = req.body;

  fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('حدث خطأ أثناء قراءة البيانات');
      return;
    }
    const books = JSON.parse(data);
    books.push(newBook);

    fs.writeFile('books.json', JSON.stringify(books, null, 2), (err) => {
      if (err) {
        res.status(500).send('حدث خطأ أثناء إضافة الكتاب');
      } else {
        res.status(200).send('تم إضافة الكتاب بنجاح');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`الخادم يعمل على http://localhost:${port}`);
});
