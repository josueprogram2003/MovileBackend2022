import { pool } from "../database"



export const readAllLibro=async(req,res)=>{
  
  try {
    pool.query(
      "select l.titulo, l.autor, l.paginas, e.nombre from libro l join editorial e on e.ideditorial = l.ideditorial;",

      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar escuela");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar escuela");
  }
};

export const agregarLibro = async (req,res)=>{

  try {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const paginas = parseInt(req.body.paginas);
    const editor= req.body.editor;
    const ideditorial = parseInt(req.body.ideditorial);
    pool.query(
      "INSERT INTO libro (titulo, autor, paginas, editor, ideditorial) VALUES(?,?,?,?,?); ",
      [titulo, autor, paginas, editor, ideditorial],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar los libros");
          
        }

      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar escuela");
  }
};

  


export const getLibroId = async (req,res)=>{
  const id = parseInt(req.params.id);
  pool.query('select * from libro where idlibro = ?;',[id], function(err, result) {
  try {
      return res.status(200).json(result);
  } catch (e) {
      return res.status(500).json('Error al mostrar el producto');
  }
});
};





export const deleteLibro = async (req,res)=>{
  try {
    const id = parseInt(req.params.id);

    pool.query(
      "DELETE FROM libro WHERE idlibro=?; ",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar escuela");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar escuela");
  }
};




export const editarLibro = async (req,res)=>{
  try {
    const id = parseInt(req.params.id);
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const paginas = parseInt(req.body.paginas);
    const editor= req.body.editor;
    const ideditorial = parseInt(req.body.ideditorial);
    
    pool.query(
      "update libro SET titulo=?, autor=? , paginas=? , editor=? , ideditorial=? WHERE idlibro=?; ",
      [titulo, autor, paginas, editor, ideditorial, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar escuela");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar escuela");
  }
};

