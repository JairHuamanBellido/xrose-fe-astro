import type { Entry } from "contentful";
import { ContentfulPageMapper } from "../../../page/domain/mapper/ContentfulPageMapper";
import type { ContentfulSubpartNavigationContentType } from "../../infrastructure/model/ContentfulSubpartNavigationContentType.interface";
import type { SubpartNavigationDomain } from "../model/SubpartNavigationDomain.model";

export class ContentfulSubpartNavigationMapper {
  static toDomainEntity(
    contentfulSubpartNavigation: Entry<ContentfulSubpartNavigationContentType>
  ): SubpartNavigationDomain {
    return {
      label: contentfulSubpartNavigation.fields.label,
      page: ContentfulPageMapper.toDomainEntity(
        contentfulSubpartNavigation.fields.page
      ),
    };
  }

  static toDomainEntities(
    contentfulSubpartNavigations: Entry<ContentfulSubpartNavigationContentType>[]
  ): SubpartNavigationDomain[] {
    return contentfulSubpartNavigations.map((subpartNavigation) =>
      this.toDomainEntity(subpartNavigation)
    );
  }
}
