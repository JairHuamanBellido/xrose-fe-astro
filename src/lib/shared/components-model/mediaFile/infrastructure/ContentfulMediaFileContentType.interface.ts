import type { Entry } from "contentful";

export interface ContentfulMediaFileContentType {
  readonly altText: string;
  readonly media:Entry<ContentfulMediaContentType>
}

export interface ContentfulMediaContentType {
  readonly description: string;
  readonly title: string;
  readonly file: {
    url: string;
  };
}
