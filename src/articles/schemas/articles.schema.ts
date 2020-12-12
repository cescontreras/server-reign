import { Schema } from 'mongoose';

export const ArticleSchema = new Schema( {

  creationDate: Date,
  title: String,
  url: String,
  author: String,
  articleID: String
})