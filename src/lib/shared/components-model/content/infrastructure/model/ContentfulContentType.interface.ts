import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../../sectionHero/infrastructure/model/ContentfulSectionHeroContentType.interface";
import type { ContentfulSectionInformationContentType } from "../../../sectionInformation/infrastructure/model/ContentfulSectionInformationContentType.interface";
import type { ContentfulSectionRecommendationsContentType } from "../../../sectionRecommendations/infrastructure/model/ContentfulSectionRecommendationsContentType.interface";
import type { ContentfulSectionFeaturesContentType } from "../../../sectionFeatures/infrastructure/model/ContentfulSectionFeaturesContentType.interface";

export interface ContentfulContentType {
  sections: Array<
    Entry<
      | ContentfulSectionHeroContentType
      | ContentfulSectionRecommendationsContentType
      | ContentfulSectionInformationContentType
      | ContentfulSectionFeaturesContentType
    >
  >;
}
