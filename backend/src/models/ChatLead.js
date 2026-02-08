import mongoose from "mongoose"

const chatLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    source: { type: String, default: "chatbot" },
  },
  { timestamps: true }
)

export const ChatLead = mongoose.model("ChatLead", chatLeadSchema)
