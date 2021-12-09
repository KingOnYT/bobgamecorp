const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const routes = require('./routes/api/orders')
const PORT = process.env.PORT || 5000;
const orders = require('./members')

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
      console.log(orders)
      res.render('index', {
            title: "Bob's Game corp",
            orders
      })

})

app.get('/api/v1/admin/Kevin/daniel', (req, res) => {
      res.render('admins', {
            title: "Bob's Game corp",
            orders
      })
      
            

})
app.listen(PORT, () => {
      console.log("Server is up")
});
app.use("/api/v1/orders", require('./routes/api/orders'));
