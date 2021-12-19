var express = require('express');
var router = express.Router();
var MONGO_URI = require('../.env');
const productsArray = [
  {
    id: '0',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-oYVY2SG9DJgM9TfpPt_ZuvtW2mUlQGRvg&usqp=CAU',
    title: 'T-shirt+shorts ml-34',
    category: 'ბავშვი',
    price: 39,
    oldPrice: 55,
    count: '5',
    inCart: false,
    info:
      ' Why is this product useful or better than its competitors? This can be anything from quality to value to features — really think about the benefits that will speak to customers. Also consider how images can complement your product copy.How does the product work? This may not be necessary for every product, but if you are selling anything with moving parts or electronics, it’s a must-have.',
    date: 'Wed Jun 21 2021 22:25:34 GMT+0400 (Georgia Standard Time)'
  },
  {
    id: '1',
    imgUrl:
      'https://th-test-11.slatic.net/p/7/men39s-fashion-casual-short-sleeves-o-neck-letter-printing-t-shirttops-tees-navy-blue-ampnbsp-intl-8852-83932907-5b782018c8a1a9c06be25be472acce58-catalog_233.jpg',
    title: 'T-shirt node-34',
    category: 'ბავშვი',
    price: 40,
    oldPrice: 88,
    count: '5',
    inCart: false,
    info:
      'Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 23 2021 14:05:04 GMT+0400 (Georgia Standard Time)'
  },
  {
    id: '2',
    imgUrl:
      'https://th-test-11.slatic.net/p/7/men39s-cotton-short-sleeved-o-neck-printing-t-shirt-yellow-ampnbsp-intl-1589-67884017-61ddb04a26285b266aa2992751f897b3-catalog_233.jpg',
    title: 'T-shirt mid m13',
    category: 'ქალი',
    price: 45,
    oldPrice: 49,
    count: '5',
    inCart: false,
    info:
      'Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 25 2021 10:12:04 GMT+0400 (Georgia Standard Time)'
  },
  {
    id: '3',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilo4VcODPfh3asQ5dm-ngQlN_LssuxLtbcQ&usqp=CAU',
    title: 'Pants-mdg4',
    category: 'კაცი',
    price: 58,
    oldPrice: 0,
    count: '5',
    inCart: false,
    info:
      'What are the product’s basic details? This includes attributes such as dimensions, materials, product features and functions.Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 27 2021 19:07:34 GMT+0400 (Georgia Standard Time)'
  },
  {
    id: '4',
    imgUrl:
      'https://th-live-02.slatic.net/original/93b9d43e5f957d1dc9d0e828d8ebd21a.jpg',
    title: 'Shoes-new m32',
    category: 'კაცი',
    price: 60,
    oldPrice: 0,
    count: '5',
    inCart: false,
    info:
      'Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 29 2021 01:30:01 GMT+0400 (Georgia Standard Time)'
  },
  /*{
    id: '5',
    imgUrl:
      'https://th-test-11.slatic.net/p/7/product-1540-67661215-5f33bb046cb577b2cfda418f639f8789-catalog_233.jpg ',
    title: 'T-shirt model-345',
    category: 'ბავშვი',
    price: 50,
    oldPrice: 0,
    count: '5',
    inCart: false,
    info:
      'Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 30 2021 05:17:08 GMT+0400 (Georgia Standard Time)'
  }*/
];
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taro:studenti2017@cluster0.887gh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

var productsSchema = new mongoose.Schema({
  id: String,
  imgUrl: String,
  title: String,
  category: String,
  price: Number,
  oldPrice: Number,
  count: String,
  inCart: Boolean,
  info: String,
  date: String
});
var Products = mongoose.model('Products', productsSchema);

var createAndSaveProducts = function () {
  var janeFonda = new Products({
    id: '5',
    imgUrl:
      'https://th-test-11.slatic.net/p/7/product-1540-67661215-5f33bb046cb577b2cfda418f639f8789-catalog_233.jpg ',
    title: 'T-shirt model-345',
    category: 'ბავშვი',
    price: 50,
    oldPrice: 0,
    count: '5',
    inCart: false,
    info:
      'Where would someone use this product? Is it meant for indoor or outdoor use, for your car or your home?When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round, as that will speak to its long-term value.',
    date: 'Wed Jun 30 2021 05:17:08 GMT+0400 (Georgia Standard Time)'
  });
  janeFonda.save(function (err, data) {
    if (err) return console.error(err);
  });
  return janeFonda
};
const createProducts = function () {
  Products.create(productsArray, function (err, products) {
    if (err) return console.log(err);
    return products;
    console.log(products)
  });
};

const findProductById = (productId = 0) => {
  Products.findOne({ id: '0' }, function (err, products) {
    if (err) return console.log(err);
  });
};

/* GET */
router.get('/', function (req, res, next) {
  //createAndSaveProducts()
  //createProducts();
  //var data=findProductById()
  Products.find({}, function (err, products) {
    if (err) return console.log(err);
    console.log(products)
    res.json(products);
  });

});
/* change product price */
router.post('/change', function (req, res, next) {
  console.log(req.body.id)
  Products.findOne({ id: req.body.id }, function (err, product) {
    if (err) return console.log(err);
    product.price = (req.body.price);
    product.oldPrice = (req.body.oldPrice)
    product.date = (req.body.date)
    product.save((err, updatedProduct) => {
      if (err) return console.log(err);
      Products.find({}, function (err, products) {
        if (err) return console.log(err);
        res.json(products);
      });
    })
  })


  /*
    try {
      var list = productsArray.filter(x => {
        return x.id != req.body.id;
      });
      //objIndex = productsArray.findIndex((obj => obj.id == req.body.id));
      list.unshift(req.body);
      res.json(list);
      //productsArray[objIndex]=req.body; 
    } catch (e) {
      console.log(e)
    }*/
});
/* add product */
router.post('/add', function (req, res, next) {
  var newProduct = new Products(req.body);
  console.log(newProduct)
  newProduct.save(function (err, data) {
    if (err) return console.error(err);
    Products.find({}, function (err, products) {
      if (err) return console.log(err);
      console.log(products)
      res.json(products);
    });
  });


  /*Person.find({},function (err, person) {
    if (err) return console.log(err);
      person.push(req.body);
      person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      Products.find({}, function (err, products) {
        if (err) return console.log(err);
        res.json(products);
      });
    })
  });
  
   /*var list = [...productsArray];
  list.unshift(req.body)
  res.json(list);*/
});

/* delete specific product by id */
router.post('/delete', function (req, res, next) {
  Products.remove({ id: req.body.id }, (err, updatedProducts) => {
    if (err) return console.log(err);
    console.log(updatedProducts)
    Products.find({}, function (err, products) {
      if (err) return console.log(err);
      console.log(products)
      res.json(products);
    });
  })

  /*var list = productsArray.filter(x => {
    return x.id != req.body.id;
  });
  res.json(list);*/
});

module.exports = router;