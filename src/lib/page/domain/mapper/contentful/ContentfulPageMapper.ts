import type { Entry } from "contentful";
import type { ContentfulPageContentType } from "../../../infrastructure/model/contentful/ContentfulPageContentType.interface";
import type { PageDomain } from "../../model/PageDomain.model";

export class ContentfulPageMapper {
  static toDomainEntity(
    contentfulPage: Entry<ContentfulPageContentType>
  ): PageDomain {
    return {
      slug:
        contentfulPage.fields.slug === "/"
          ? "/"
          : `/${contentfulPage.fields.slug}`,
    };
  }

  static toDomainEntities(contentfulPages: Entry<ContentfulPageContentType>[]) {
    return contentfulPages.map((page) => this.toDomainEntity(page));
  }
}
