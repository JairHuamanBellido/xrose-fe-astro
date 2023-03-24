import { StrapiPageMapper } from "../../../../page/domain/mapper/strapi/StrapiPageMapper";
import type { StrapiSubpartNavigationContentType } from "../../../infrastructure/model/strapi/StrapiSubpartNavigationContentType.interface";
import type { SubpartNavigationDomain } from "../../model/SubpartNavigationDomain.model";

export class StrapiSubpartNavigationMapper {
  static toDomainEntity(
    strapiSubpartNavigation: StrapiSubpartNavigationContentType
  ): SubpartNavigationDomain {
    return {
      label: strapiSubpartNavigation.label,
      page: StrapiPageMapper.toDomainEntity(strapiSubpartNavigation.page),
    };
  }

  static toDomainEntities(
    strapiSubpartNavigations: StrapiSubpartNavigationContentType[]
  ): SubpartNavigationDomain[] {
    return strapiSubpartNavigations.map((strapiSubpartNavigation) =>
      this.toDomainEntity(strapiSubpartNavigation)
    );
  }
}
