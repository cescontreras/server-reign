import { Schema } from 'mongoose';

export const ArticleSchema = new Schema( {
  creationDate: { type: Date, default: Date.now },
  title: String,
  url: String,
  author: String  
})