import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending_payment", "paid", "in_progress", "delivered", "cancelled"],
      default: "pending_payment",
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
)

export const Order = mongoose.model("Order", orderSchema)
