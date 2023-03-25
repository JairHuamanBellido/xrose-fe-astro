import type { Entry } from "contentful";
import { ContentfulSectionHeroMapper } from "../../../sectionHero/domain/mapper/ContentfulSectionHeroMapper";
import type { ContentfulContentType } from "../../infrastructure/model/ContentfulContentType.interface";
import type { ContentDomain } from "../model/ContentDomain.model";

export class ContentfulContentMapper {
  static toDomainEntity(
    contentfulContent: Entry<ContentfulContentType>
  ): ContentDomain {
    return {
      sections: contentfulContent.fields.sections.map((section) => {
        if (section.sys.contentType.sys.id === "sectionHero") {
          return ContentfulSectionHeroMapper.toDomainEntity(section);
        }
        return null;
      }),
    };
  }
}
