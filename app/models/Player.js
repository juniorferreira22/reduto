import mongoose, { Schema } from "mongoose";
// schema do jogador
const PlayerSchema = new Schema(
  {
    nickname: { type: String, required: true },
    tier: { type: Number, required: true, min: 1, max: 5 },
    steamProfile: {type: String, required: false},
    vip: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);

// precaução para não registrar o modelo mais de uma vez conforme norma padrão do mongodb.
export default mongoose.models.Player || mongoose.model("Player", PlayerSchema);
