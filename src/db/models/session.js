const { Schema, model } = require('mongoose');

const sessionsSchema = new Schema(
  {
    userId: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  { versionKey: false },
);

export const UserCollection = model('sessions', sessionsSchema);
