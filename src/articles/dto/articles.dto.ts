export class CreateArticleDTO {
  readonly title: string;
  readonly author: string;
  readonly url: string;
  readonly creationDate: string; 
  readonly articleID: any;

  constructor(articleResponse: any) {
    this.title = articleResponse.title || articleResponse.story_title;
    this.author = articleResponse.author;
    this.url = articleResponse.url || articleResponse.story_url;
    this.creationDate = articleResponse.created_at;
    this.articleID = articleResponse.objectID;
  }
}