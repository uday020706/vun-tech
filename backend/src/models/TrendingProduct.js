import mongoose from "mongoose"

const trendingProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    details: [{ type: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const TrendingProduct = mongoose.model(
  "TrendingProduct",
  trendingProductSchema
)
