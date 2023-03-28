import type { Entry } from "contentful";
import { ContentfulSubpartFeaturedCardMapper } from "../../../subpartFeaturedCard/domain/mapper/ContentfulSubpartFeaturedCardMapper";
import type { ContentfulSectionFeaturesContentType } from "../../infrastructure/model/ContentfulSectionFeaturesContentType.interface";
import type { SectionFeaturesDomain } from "../model/SectionFeaturesDomain.model";

export class ContentfulSectionFeaturesMapper {
  static toDomainEntity(
    contentfulSectionFeatures: Entry<ContentfulSectionFeaturesContentType>
  ): SectionFeaturesDomain {
    return {
      contentTypeId: contentfulSectionFeatures.sys.contentType.sys.id,
      heading: contentfulSectionFeatures.fields.heading,
      body: contentfulSectionFeatures.fields.body,
      features: ContentfulSubpartFeaturedCardMapper.toDomainEntities(
        contentfulSectionFeatures.fields.features
      ),
    };
  }
}
