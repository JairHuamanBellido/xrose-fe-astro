import type { Entry } from "contentful";
import { ContentfulMediaFileMapper } from "../../../mediaFile/domain/mapper/ContentfulMediaFileMapper";
import { ContentfulSubpartButtonMapper } from "../../../subpartButton/domain/mapper/ContentfulSubpartButtonMapper";
import type { ContentfulSubpartFeaturedCardContentType } from "../../infrastructure/model/ContentfulSubpartFeaturedCardContentType.interface";
import type { SubpartFeaturedCardDomain } from "../model/SubpartFeaturedCardDomain.model";

export class ContentfulSubpartFeaturedCardMapper {
  static toDomainEntity(
    contentfulSubpartFeature: Entry<ContentfulSubpartFeaturedCardContentType>
  ): SubpartFeaturedCardDomain {
    return {
      heading: contentfulSubpartFeature.fields.heading,
      body: contentfulSubpartFeature.fields.body,
      button: ContentfulSubpartButtonMapper.toDomainEntity(
        contentfulSubpartFeature.fields.button
      ),
      image: ContentfulMediaFileMapper.toDomainEntity(
        contentfulSubpartFeature.fields.image
      ),
    };
  }

  static toDomainEntities(
    contentfulSubpartFeatures: Entry<ContentfulSubpartFeaturedCardContentType>[]
  ): SubpartFeaturedCardDomain[] {
    return contentfulSubpartFeatures.map((feature) =>
      this.toDomainEntity(feature)
    );
  }
}
