import type { Document } from "@contentful/rich-text-types";

export interface ContentfulSubpartRecommendationContentType {
  readonly heading: string;
  readonly body: Document;
}
