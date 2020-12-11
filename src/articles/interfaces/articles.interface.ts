import { Document } from "mongoose";

export interface Article extends Document {
  readonly title: string;
  readonly author: string;
  readonly url: string;
  readonly creationDate: string;
  readonly articleID: string;
}