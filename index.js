const express = require('express')
const cors = require('cors')
const dataService = require('./services/dataservice')

const server = express()
server.use(cors({
    origin:'http://localhost:4200'
}))


server.use(express.json())


server.listen(3000,()=>{
    console.log('Book store is listening at port number 3000');
})


// all-books Api
server.get('/all-books',(req,res)=>{
    dataService.allBooks()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// view-books/'+bookId api
server.get('/view-books/:bookId',(req,res)=>{
    dataService.viewBook(req.params.bookId)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add to wishlist
server.post('/add-to-wishlist',(req,res)=>{
    dataService.addtowishlist(req.body)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// get-wishlist Api
server.get('/get-wishlist',(req,res)=>{
    dataService.getwishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// remove-item-wishlist Api
server.delete('/remove-item-wishlist/:bookId',(req,res)=>{
    dataService.deleteItemtWishlist(req.params.bookId)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
