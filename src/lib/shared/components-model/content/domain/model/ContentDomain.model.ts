import type { SectionHeroDomain } from "../../../sectionHero/domain/model/SectionHeroDomain.model";
import type { SectionInformationDomain } from "../../../sectionInformation/domain/model/SectionInformationDomain.model";
import type { SectionRecommendationsDomain } from "../../../sectionRecommendations/domain/model/SectionRecommendationsDomain.model";

export interface ContentDomain {
  sections: Array<
    | SectionHeroDomain
    | SectionRecommendationsDomain
    | SectionInformationDomain
    | null
  >;
}
