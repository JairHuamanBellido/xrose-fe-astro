import type { SectionHeroDomain } from "../../../sectionHero/domain/model/SectionHeroDomain.model";
import type { SectionRecommendationsDomain } from "../../../sectionRecommendations/domain/model/SectionRecommendationsDomain.model";

export interface ContentDomain {
  sections: Array<SectionHeroDomain | SectionRecommendationsDomain | null>;
}
