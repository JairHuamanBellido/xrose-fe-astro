import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../../sectionHero/infrastructure/model/ContentfulSectionHeroContentType.interface";

export interface ContentfulContentType {
  sections: Array<Entry<ContentfulSectionHeroContentType>>;
}
