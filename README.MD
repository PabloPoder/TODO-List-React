
# Enunciado

1. Ecommerce

✅ - Muestra una lista de productos que vienen de un JSON.
✅ - Agrega un filtro por categoria
✅ - Agrega un filtro por precio
✅ - Haz uso se useContext para evitar pasar props innecesarios

2. Shopping Cart

- Haz que se puedan agregar los productos a un carrito.
- Haz que se puedan eliminar los productos del carrito.
- Haz que se pueda modificar la cantidad de productos del carrito.
- Sincroniza los cambios del carrito con la lista de productos.
- Guarda en un localStorage el carrito para que se recupere al recargar la pagina.


Ejemplo de filtrado:
```js
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
];

// Función de filtrado personalizada para buscar libros por género y autor
const filterBooks = (books, genre, author) => {
  return books.filter((book) => {
    // Verifica si el género del libro coincide con el criterio de filtrado
    const genreMatch = genre ? book.genre.toLowerCase() === genre.toLowerCase() : true;

    // Verifica si el autor del libro coincide con el criterio de filtrado
    const authorMatch = author ? book.author.toLowerCase().includes(author.toLowerCase()) : true;

    // Devuelve true si tanto el género como el autor coinciden, de lo contrario, devuelve false
    return genreMatch && authorMatch;
  });
};

// Ejemplo de uso: filtrar libros por género y autor
const filteredBooks = filterBooks(books, 'Fiction', 'Scott');
console.log(filteredBooks);


 const filteredProducts = () => {
    return products.filter((product) => {
      const category = product.category === 'all' || product.category === filters.category
      const price = product.price >= 0

      return category && price
    })
  }



```