import app from "./app";
import { config } from "dotenv"; // importo la fx de configuracion (una vez importado en un lugar ya inyecta todas las variables de entorno)

config();
const PORT = process.env.PORT; // Este nombre es el que le damos a la variable de entorno.

app.listen(PORT, () => console.log("Server running on port: ", PORT));
