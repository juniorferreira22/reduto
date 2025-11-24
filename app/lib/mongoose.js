import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;
  // Se não houver a variável de ambiente, lança um erro
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI não configurada");
  }
  // Conecta ao MongoDB pelo modo padrão do Mongoose e caso haja algum erro ele lança
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "reduto",
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB conectado");
  } catch (err) { 
    console.error("Erro ao conectar no MongoDB:", err);
    throw err;
  }
}
