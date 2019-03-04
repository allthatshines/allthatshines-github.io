var Product=require('../models/product');

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true});

var products=[
    new Product({
        imagepath: 'http://img6a.flixcart.com/image/shoe/c/s/c/red-lbj002-force-10-43-original-imadsv92kfmgyuw5.jpeg',
        title: 'White Shoes-boys',
        description: 'stylist trending white shoes for boys.',
        price: 15000
    }),
    new Product({
        imagepath: 'http://img.alicdn.com/imgextra/i3/2829153496/TB2wsRrJ1uSBuNjSsplXXbe8pXa_!!2829153496.jpg',
        title: 'White Shoes-girls',
        description: 'stylist trending white shoes for girls.',
        price: 13000
    }),
    new Product({
        imagepath: 'https://riverisland.scene7.com/is/image/RiverIsland/832339_main?$ProductPageZoom$',
        title: 'Brown Shoes-girls',
        description: 'stylist trending brown fur shoes for girls.',
        price: 17000
    }),
    new Product({
        imagepath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZUa7i48AroWC7zpx6Wt2rAO1iITJWjkCGh7HGyqAQ9aWVILl',
        title: 'Trending Shoes',
        description: 'stylist trending white-blue jean shoes.',
        price: 10000
    }),
    new Product({
        imagepath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQEUJ8VRA2KLxc1hNXEQPxyitBCcBhMLHI7sqzheV8XGdUTvX',
        title: 'Floral Shoes-kids',
        description: 'stylist trending floral shoes for girls',
        price: 5000
    })
];

var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function (err,result) {
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect();
}