import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../../sectionHero/infrastructure/model/ContentfulSectionHeroContentType.interface";
import type { ContentfulSectionRecommendationsContentType } from "../../../sectionRecommendations/infrastructure/model/ContentfulSectionRecommendationsContentType.interface";

export interface ContentfulContentType {
  sections: Array<
    Entry<
      | ContentfulSectionHeroContentType
      | ContentfulSectionRecommendationsContentType
    >
  >;
}
