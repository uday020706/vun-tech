import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    includes: [{ type: String }],
    idealFor: { type: String },
    visible: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceCategory" },
  },
  { timestamps: true }
)

export const Service = mongoose.model("Service", serviceSchema)
