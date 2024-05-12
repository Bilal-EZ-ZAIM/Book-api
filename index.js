const express = require('express');

const app = express();

app.use(express.json());
const books = [
    {
        id: 1,
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy"
    },
    {
        id: 2,
        title: "Harry Potter à l'école des sorciers",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian"
    },
    {
        id: 4,
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        genre: "Fable"
    }
];



app.get("/", (req, res) => {
    res.send("Bonjour dans ce projet");
})

app.post("/api/book", (req, res) => {

    console.log(req.body);
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre
    };

    if (book) {
        books.push(book);
        res.status(201).json(book);
    }

    if (!book) {
        res.status(404);
    }




})

app.get("/api/book", (req, res) => {
    res.json(books);
})

app.get("/api/book/:id", (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));

    if (book) {
        return res.status(200).json(book);
    }

    if (!book) {
        return res.status(404).json({
            "message ": "book not fond"
        });
    }

})
const port = 4000;

app.listen(port, () => console.log("Le serveur écoute sur le port " + port));
