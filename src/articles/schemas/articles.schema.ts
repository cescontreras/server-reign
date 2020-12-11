import { Schema } from 'mongoose';

export const ArticleSchema = new Schema( {
  title: String,
  author: String,
  comment: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
  objectID: String,
})