import getConnection  from "./../db/database.js"
const getcategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT 	id_admin, 	nombre_admin, email, contrasena, rol, fecha_creacion  FROM administradores")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500")
    }
 
    
}

export const methodHTTP = {
    getcategorias
}

