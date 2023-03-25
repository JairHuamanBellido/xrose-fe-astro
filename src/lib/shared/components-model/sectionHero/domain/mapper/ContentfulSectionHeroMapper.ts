import type { Entry } from "contentful";
import type { ContentfulSectionHeroContentType } from "../../infrastructure/model/ContentfulSectionHeroContentType.interface";
import type { SectionHeroDomain } from "../model/SectionHeroDomain.model";
import { ContentfulMediaFileMapper } from "../../../mediaFile/domain/mapper/ContentfulMediaFileMapper";
import { ContentfulSubpartButtonMapper } from "../../../subpartButton/domain/mapper/ContentfulSubpartButtonMapper";
import { ContentfulSubpartTrustedCompaniesMapper } from "../../../subpartTrustedCompanies/domain/mapper/ContentfulSubpartTrustedCompaniesMapper";

export class ContentfulSectionHeroMapper {
  static toDomainEntity(
    contentfulSectionHero: Entry<ContentfulSectionHeroContentType>
  ): SectionHeroDomain {
    const subpartButton = contentfulSectionHero.fields.button
      ? ContentfulSubpartButtonMapper.toDomainEntity(
          contentfulSectionHero.fields.button
        )
      : undefined;

    const trusted_companies = contentfulSectionHero.fields.trustedCompanies
      ? ContentfulSubpartTrustedCompaniesMapper.toDomainEntity(
          contentfulSectionHero.fields.trustedCompanies
        )
      : undefined;
    return {
      contentTypeId: contentfulSectionHero.sys.contentType.sys.id,
      heading: contentfulSectionHero.fields.heading,
      htmlBody: contentfulSectionHero.fields.body,
      image: ContentfulMediaFileMapper.toDomainEntity(
        contentfulSectionHero.fields.image
      ),
      button: subpartButton,
      trustedCompanies: trusted_companies,
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
