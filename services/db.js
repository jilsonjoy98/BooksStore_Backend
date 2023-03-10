const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookstore',()=>{
    console.log('MongoDB Connection successfull!!');
}
)


const Book =mongoose.model('Book',


{
       
    id:Number,
    title:String,
    image:String,
    Description:String,
    price:Number,
    rating:Number
      
}
)

// to store wishlist
const Wishlist =mongoose.model('Wishlist',


{
       
    id:Number,
    title:String,
    image:String,
    Description:String,
    price:Number,
    rating:Number
      
}
)

module.exports ={
    Book,
    Wishlist
}