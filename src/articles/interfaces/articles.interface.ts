import { StringifyOptions } from "querystring";

import { Document } from "mongoose";

export interface Article extends Document {
  readonly title: string;
  readonly author: string;
  readonly comment: string;
  readonly url: string;
  readonly createdAt: Date;
}