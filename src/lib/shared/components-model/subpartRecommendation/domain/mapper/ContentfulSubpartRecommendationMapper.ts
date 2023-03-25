import type { Entry } from "contentful";
import type { ContentfulSubpartRecommendationContentType } from "../../infrastructure/model/ContentfulSubpartRecommendationContentType.interface";
import type { SubpartRecommendationDomain } from "../model/SubpartRecommendationDomain.model";

export class ContentfulSubpartRecommendationMapper {
  static toDomainEntity(
    contentfulSubpartRecommendation: Entry<ContentfulSubpartRecommendationContentType>
  ): SubpartRecommendationDomain {
    return {
      body: contentfulSubpartRecommendation.fields.body,
      heading: contentfulSubpartRecommendation.fields.heading,
    };
  }

  static toDomainEntities(
    contentfulSubpartRecommendations: Entry<ContentfulSubpartRecommendationContentType>[]
  ): SubpartRecommendationDomain[] {
    return contentfulSubpartRecommendations.map((recommendation) =>
      this.toDomainEntity(recommendation)
    );
  }
}
