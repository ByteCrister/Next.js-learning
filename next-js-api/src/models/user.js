import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        collection: "user", // Explicitly specify the collection name
        timestamps: true,   // Automatically manage `createdAt` and `updatedAt` fields
    }
);

// Add an index to the `email` field
UserSchema.index({ email: 1 });

// Always check if the model exists to prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;