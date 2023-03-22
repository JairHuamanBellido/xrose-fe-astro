import type { Entry } from "contentful";
import type { ContentfulNavigationContentType } from "../../../infrastructure/model/contentful/ContentfulNavigationContentType.interface";
import type { NavigationDomain } from "../../model/NavigationDomain.model";
import { ContentfulSubpartNavigationMapper } from "./ContentfulSubpartNavigationMapper";

export class ContentfulNavigationMapper {
  static toDomainEntity(
    contentfulNavigation: Entry<ContentfulNavigationContentType>
  ): NavigationDomain {
    return {
      subpart_navigations: ContentfulSubpartNavigationMapper.toDomainEntities(
        contentfulNavigation.fields.navItems
      ),
    };
  }

  static toDomainEntities(
    contentfulNavigations: Entry<ContentfulNavigationContentType>[]
  ): NavigationDomain[] {
    return contentfulNavigations.map((navigation) =>
      this.toDomainEntity(navigation)
    );
  }
}
