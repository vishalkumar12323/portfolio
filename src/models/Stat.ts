import mongoose, { Schema, Model } from "mongoose";

export interface IStat {
  id: string;
  commitId: string;
  commitMessage: string;
  commitUrl: string;
  timestamp: Date;
  createdAt: Date;
}

// Schema keys match the actual field names stored in MongoDB (set by Prisma's @map)
const StatSchema = new Schema(
  {
    commit_id: { type: String, required: true },
    commit_message: { type: String, required: true },
    commit_url: { type: String, required: true },
    timestamp: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: "stats",
  }
);

const Stat: Model<any> =
  mongoose.models.Stat || mongoose.model("Stat", StatSchema);

export default Stat;
