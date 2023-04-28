import createHttpError from 'http-errors'
import Category from './../../models/Category.js'

//la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo
// utilizo la sintaxis de try/catch para intentar algo y catchear los errores
//utilizo el metodo find para buscar los recursos del modelo
//configurola respuesta que le tengo que enviar al cliente (front) 

let read = async(req, res, next) => { 
  try{        
    let all =await Category.find()

      if (all.length>0){
        return res.status(200)
        .json({
          categories:all
        })
      } 
      return next(createHttpError(404, "El recurso no se encontro"))
      
  }catch(error){
    console.log(error);
    next(error)
  }

  
}

export default read