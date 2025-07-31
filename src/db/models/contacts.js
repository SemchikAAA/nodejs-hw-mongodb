import { Schema, model } from 'mongoose';

const contactsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    required: true,
    enum: ['work', 'home', 'personal'],
    default: 'personal',
  },
});

export const ContactsCollection = model('contacts', contactsSchema);
