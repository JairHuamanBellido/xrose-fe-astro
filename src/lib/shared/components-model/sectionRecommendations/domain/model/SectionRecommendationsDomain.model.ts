import type { SubpartRecommendationDomain } from "../../../subpartRecommendation/domain/model/SubpartRecommendationDomain.model";

export interface SectionRecommendationsDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly recommendations: SubpartRecommendationDomain[];
}
