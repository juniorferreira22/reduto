import mongoose, { Schema } from "mongoose";

const PlayerSchema = new Schema(
  {
    nickname: { type: String, required: true },
    tier: { type: Number, required: true, min: 1, max: 5 },
    steamProfile: {type: String, required: false},
    vip: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// nao recria o model em auto reload nao burro.
export default mongoose.models.Player || mongoose.model("Player", PlayerSchema);
