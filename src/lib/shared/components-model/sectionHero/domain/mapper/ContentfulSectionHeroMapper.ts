import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../infrastructure/model/ContentfulSectionHeroContentType.interface";
import type { SectionHeroDomain } from "../model/SectionHeroDomain.model";
import { ContentfulMediaFileMapper } from "../../../mediaFile/domain/mapper/ContentfulMediaFileMapper";

export class ContentfulSectionHeroMapper {
  static toDomainEntity(
    contentfulSectionHero: Entry<ContentfulSectionHeroContentType>
  ): SectionHeroDomain {
    return {
      contentTypeId: contentfulSectionHero.sys.contentType.sys.id,
      heading: contentfulSectionHero.fields.heading,
      htmlBody: contentfulSectionHero.fields.body,
      image: ContentfulMediaFileMapper.toDomainEntity(
        contentfulSectionHero.fields.image
      ),
    };
  }

  static toDomainEntities(
    contentfulSectionHeros: Entry<ContentfulSectionHeroContentType>[]
  ): SectionHeroDomain[] {
    return contentfulSectionHeros.map((sectionHero) =>
      this.toDomainEntity(sectionHero)
    );
  }
}
