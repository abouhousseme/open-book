<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مكتبة الكتب</title>
</head>
<body>
  <h1>مكتبة الكتب</h1>
  <div id="book-list"></div>

  <script>
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(books => {
        const bookList = document.getElementById('book-list');
        books.forEach(book => {
          const bookElement = document.createElement('div');
          bookElement.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
          bookList.appendChild(bookElement);
        });
      });
  </script>
</body>
</html>
