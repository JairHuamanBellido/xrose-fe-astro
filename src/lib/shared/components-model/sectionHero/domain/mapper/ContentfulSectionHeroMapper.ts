import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../infrastructure/model/ContentfulSectionHeroContentType.interface";
import type { SectionHeroDomain } from "../model/SectionHeroDomain.model";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export class ContentfulSectionHeroMapper {
  static toDomainEntity(
    contentfulSectionHero: Entry<ContentfulSectionHeroContentType>
  ): SectionHeroDomain {

    return {
      contentTypeId: contentfulSectionHero.sys.contentType.sys.id,
      heading: contentfulSectionHero.fields.heading,
      htmlBody: documentToHtmlString(contentfulSectionHero.fields.body),
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
