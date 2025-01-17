import express from 'express'
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';

const app = express();
const serverPort = 3300;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.listen(serverPort, (err) => {
    if (err) { 
      console.error(`Server failed to start: ${err}`); 
      return;
    }
    console.log(`Server is up and running on port ${serverPort}`);  
  }); 
