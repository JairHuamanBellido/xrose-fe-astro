import type { Entry } from "contentful";
import type { ContentfulSubpartRecommendationContentType } from "../../../subpartRecommendation/infrastructure/model/ContentfulSubpartRecommendationContentType.interface";

export interface ContentfulSectionRecommendationsContentType {
  readonly heading: string;
  readonly recommendations: Entry<ContentfulSubpartRecommendationContentType>[];
}
