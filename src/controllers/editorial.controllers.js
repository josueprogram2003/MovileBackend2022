import { pool } from "../database";
export const geteditoriales = async (req, res) => {
  try {
    pool.query("select * from editorial;", function (err, result) {
      console.log(result);
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar editorial");
      }
    });
  } catch (error) {
    return res.status(500).json("Error al listar editorial");
  }
};
export const geteditorialesId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      "select * from editorial where ideditorial=?;",
      [id],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar editorial");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar editorial");
  }
};
