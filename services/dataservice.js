
const db = require('./db')

// all-books
const allBooks =()=>{
   return db.Book.find().then(
    (result)=>{
        if(result){
            return{
                statusCode:200,
                books:result
            }
        }
        else
        {
           return{
            statusCode:404,
            message:"No data is present"
           }
        }
    }
   )
}

// view book
const viewBook =(id)=>{
   return db.Book.findOne({
        id
    })
    .then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    book:result
                }
            }
            else
            {
               return{
                statusCode:404,
                message:"No book is present"
               }
            }
        }
    )
}

// add to wishlist
const addtowishlist =(book)=>{
    return db.Wishlist.findOne({
        id:book.id
    }).then(result=>{
        if(result){
            return{
                statusCode:401,
                message:"Product already in the wishlist"
            }
        }
        else{
            let newBook =new db.Wishlist({
                id:book.id,
                title:book.title,
                image:book.image,
                Description:book.Description,
                price:book.price,
                rating:book.rating
            })
            newBook.save()
            return{
                statusCode:200,
                message:"Item added to your wishlist"
            }
        }
    })
}

// getwishlist
const getwishlist  =()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    wishlist:result
                }
            }
            else
            {
               return{
                statusCode:404,
                message:"Wishlist is Empty"
               }
            }
        }
       )
}

// deleteItemtWishlist
const deleteItemtWishlist =(id)=>{
    return db.Wishlist.deleteOne({id})
    .then((result)=>{
        if (result){
            // if delete successful then get the updated wishlist
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            statusCode:200,
                            wishlist:result
                        }
                    }
                    else
                    {
                       return{
                        statusCode:404,
                        message:"Wishlist is Empty"
                       }
                    }
                }
               )
        }
        else{
            return{
                statusCode:404,
                message:"Item not found"
            }
        }
    })
}

module.exports ={
    allBooks,
    viewBook,
    addtowishlist,
    getwishlist,
    deleteItemtWishlist
}