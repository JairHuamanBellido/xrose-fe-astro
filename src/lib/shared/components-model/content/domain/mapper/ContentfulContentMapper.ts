import type { Entry } from "contentful";
import { ContentfulSectionHeroMapper } from "../../../sectionHero/domain/mapper/ContentfulSectionHeroMapper";
import { ContentfulSectionInformationMapper } from "../../../sectionInformation/domain/mapper/ContentfulSectionInformationMapper";
import { ContentfulSectionRecommendationsMapper } from "../../../sectionRecommendations/domain/mapper/ContentfulSectionRecommendationsMapper";
import type { ContentfulContentType } from "../../infrastructure/model/ContentfulContentType.interface";
import type { ContentDomain } from "../model/ContentDomain.model";

export class ContentfulContentMapper {
  static toDomainEntity(
    contentfulContent: Entry<ContentfulContentType>
  ): ContentDomain {
    return {
      sections: contentfulContent.fields.sections.map((section: any) => {
        switch (section.sys.contentType.sys.id) {
          case "sectionHero":
            return ContentfulSectionHeroMapper.toDomainEntity(section);
          case "sectionRecommendations":
            return ContentfulSectionRecommendationsMapper.toDomainEntity(
              section
            );
          case "sectionInformation":
            return ContentfulSectionInformationMapper.toDomainEntity(section);
          default:
            return null;
        }
      }),
    };
  }
}
