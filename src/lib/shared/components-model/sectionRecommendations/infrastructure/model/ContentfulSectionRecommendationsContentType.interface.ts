import type { Entry } from "contentful";
import type { ContentfulSubpartRecommendationContentType } from "../../../subpartRecommendation/infrastructure/model/ContentfulSubpartRecommendationContentType.interface";

export interface ContentfulSectionRecommendationsContentType {
  readonly component_id: "SectionRecommendations";
  readonly heading: string;
  readonly recommendations: Entry<ContentfulSubpartRecommendationContentType>[];
}
