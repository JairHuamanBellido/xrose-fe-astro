import type { Entry } from "contentful";
import { ContentfulSubpartRecommendationMapper } from "../../../subpartRecommendation/domain/mapper/ContentfulSubpartRecommendationMapper";
import type { ContentfulSectionRecommendationsContentType } from "../../infrastructure/model/ContentfulSectionRecommendationsContentType.interface";
import type { SectionRecommendationsDomain } from "../model/SectionRecommendationsDomain.model";

export class ContentfulSectionRecommendationsMapper {
  static toDomainEntity(
    contentfulSectionRecommendations: Entry<ContentfulSectionRecommendationsContentType>
  ): SectionRecommendationsDomain {
    return {
      contentTypeId: contentfulSectionRecommendations.sys.contentType.sys.id,
      heading: contentfulSectionRecommendations.fields.heading,
      recommendations: ContentfulSubpartRecommendationMapper.toDomainEntities(
        contentfulSectionRecommendations.fields.recommendations
      ),
    };
  }
}
