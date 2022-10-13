import { pool } from "../database";
export const getBibliotecas = async (req, res) => {
  try {
    pool.query(
      "select l.idlibro, l.titulo, l.autor, l.paginas, e.nombre from libro l join editorial e on e.ideditorial = l.ideditorial;",
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar libro");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar libro");
  }
};
export const getBibliotecasId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      "select * from libro where idlibro = ?;",
      [id],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar bibloteca");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar bibloteca");
  }
};
