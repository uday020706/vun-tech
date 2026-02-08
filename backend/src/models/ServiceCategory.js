import mongoose from "mongoose"

const serviceCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    items: [{ type: String }],
  },
  { timestamps: true }
)

export const ServiceCategory = mongoose.model(
  "ServiceCategory",
  serviceCategorySchema
)
