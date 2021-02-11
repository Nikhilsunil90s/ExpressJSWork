const app = require('express')();
const bp = require('body-parser');

app.use(bp.urlencoded({extended: true}));

app.use(bp.json());

app.use('/add-product' , (req,res,next) => {
    console.log('Adding Product!');
    res.send("<form method = 'POST' action = '/productAdded'><input type = 'text' name = 'bodyInput'/><br><input type = 'submit' value = 'Add Product!'/></form>");
});

app.use('/productAdded' , (req,res) => {
    console.log('Product Added...');
    console.log(req.body);
    //alert('Hello, ' + req.body.bodyInput);
    //window.alert('Hello, ' + req.body.bodyInput);
    res.send("<h1>Product Added! , </h1> <br> <h2>" + req.body.bodyInput + "</h2>");
})

app.use('/' ,(req,res,next) => {
    console.log("A Middleware");
    res.send("<h1>Hello, Express Js!</h1>");
});

app.listen(3000);