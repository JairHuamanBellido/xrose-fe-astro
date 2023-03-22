import type { StrapiPageContentType } from "../../../infrastructure/model/strapi/StrapiPageContentType.interface";
import type { PageDomain } from "../../model/PageDomain.model";

export class StrapiPageMapper {
  static toDomainEntity(strapiPage: StrapiPageContentType): PageDomain {
    return {
      slug: strapiPage.slug === "/" ? "/" : `/${strapiPage.slug}`,
    };
  }

  static toDomainEntities(strapiPages: StrapiPageContentType[]): PageDomain[] {
    return strapiPages.map((strapiPage) => this.toDomainEntity(strapiPage));
  }
}
