import express from 'express'
import usersRouter from './auth.js' 
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'
import chaptersRouter from './chapters.js'
import mangasRouter from './mangas.js'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', 
  subtitle: 'Endpoints of Minga' });
});

const midd1 = (req,res,next)=>{  //funcion para peticion a categories
    console.log(`solo estoy en categories`);
    next()
}    

router.use('/auth', usersRouter)
router.use('/authors', authorRouter)
router.use('/categories',midd1 ,categoriesRouter) //peticion a catagories
router.use('/companies', companiesRouter)
router.use('/chapters', chaptersRouter)
router.use('/mangas', mangasRouter)

export default router;