import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    industry: { type: String },
    outcome: { type: String },
    stack: [{ type: String }],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export const Project = mongoose.model("Project", projectSchema)
