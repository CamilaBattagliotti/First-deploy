import crypto from "crypto"; // nativo de node

function createHash(data: string) {
  const hash = crypto.createHash("sha256"); // creamos un objeto hash (el string sha256 indica el tipo de algoritmo de encriptacion que vamos a utilizar).
  return hash.update(data).digest("hex"); // el metodo update actualiza el hash, digest nos va a dar un valor hexadecimal(cadena de texto)
}

export default createHash;
