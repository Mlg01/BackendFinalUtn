import { pool } from "../db.js";

export const getTurnos = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://aesthetic-vacherin-41d63e.netlify.app');
  try {
    const [result] = await pool.query(
      "SELECT * FROM turnos ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTurno = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://aesthetic-vacherin-41d63e.netlify.app');
  try {
    const [result] = await pool.query("SELECT * FROM turnos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Turno not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTurno = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://aesthetic-vacherin-41d63e.netlify.app');
  try {
    const { nombre, telefono, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO turnos(nombre, telefono, description) VALUES (?, ?, ?)",
      [nombre, telefono, description]
    );
    res.json({
      id: result.insertId,
      nombre,
      telefono,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTurno = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://aesthetic-vacherin-41d63e.netlify.app');
  try {
    const result = await pool.query("UPDATE turnos SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTurno = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://aesthetic-vacherin-41d63e.netlify.app');
  try {
    const [result] = await pool.query("DELETE FROM turnos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// ..