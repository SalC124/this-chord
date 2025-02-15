const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: String,
  msgs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Msg",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    // do not include the passwordHash
    delete ret.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
