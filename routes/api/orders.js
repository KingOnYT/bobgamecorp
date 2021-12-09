const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const orders = require('./../../members');
router.use(bodyParser.json())
router.get("/", (res, req) => {
      req.json(orders);   
      console.log(orders)   
})
router.post("/createOrder", (req, res) => {
      if(req.body.type == '' || req.body.name == "" || req.body.grade == '' || req.body.email == '' || req.body.amount == '') {
            res.redirect("/")
      }else {
            const post = {
                  id: orders.length,
                  type: req.body.type,
                  name: req.body.name,
                  email: req.body.email,
                  grade: req.body.grade,
                  amount: req.body.amount
      
            }  
      orders.push(post);
      res.redirect("/")      

      }
   

})
router.get("/delete/:id", (req, res) => {
      orders.splice(req.params.id, 1);
      res.redirect(req.params.url)
})
module.exports = router, orders;