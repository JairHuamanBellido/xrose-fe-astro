import type { StrapiNavigationContentType } from "../../../infrastructure/model/strapi/StrapiNavigationContentType.interface";
import type { NavigationDomain } from "../../model/NavigationDomain.model";
import { StrapiSubpartNavigationMapper } from "./StrapiSubpartNavigationMapper";

export class StrapiNavigationMapper {
  static toDomainEntity(
    strapiNavigation: StrapiNavigationContentType
  ): NavigationDomain {
    return {
      subpart_navigations: StrapiSubpartNavigationMapper.toDomainEntities(
        strapiNavigation.subpart_navigations
      ),
    };
  }

  static toDomainEntities(strapiNavigations: StrapiNavigationContentType[]) {
    return strapiNavigations.map((strapiNavigation) =>
      this.toDomainEntity(strapiNavigation)
    );
  }
}
