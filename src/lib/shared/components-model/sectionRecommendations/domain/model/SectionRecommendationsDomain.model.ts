import type { SubpartRecommendationDomain } from "../../../subpartRecommendation/domain/model/SubpartRecommendationDomain.model";

export interface SectionRecommendationsDomain {
  readonly heading: string;
  readonly recommendations: SubpartRecommendationDomain[];
}
