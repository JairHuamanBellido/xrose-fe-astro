import type { Entry } from "contentful";
import { ContentfulContentMapper } from "../../../../shared/components-model/content/domain/mapper/ContentfulContentMapper";
import type { ContentfulPageContentType } from "../../../infrastructure/model/contentful/ContentfulPageContentType.interface";
import type { PageDomain } from "../../model/PageDomain.model";

export class ContentfulPageMapper {
  static toDomainEntity(
    contentfulPage: Entry<ContentfulPageContentType>
  ): PageDomain {
    const slugParse =
      contentfulPage.fields.slug === "/"
        ? "/"
        : `/${contentfulPage.fields.slug}`;
    return {
      slug: slugParse,
      content: ContentfulContentMapper.toDomainEntity(
        contentfulPage.fields.content
      ),
    };
  }

  static toDomainEntities(contentfulPages: Entry<ContentfulPageContentType>[]) {
    return contentfulPages.map((page) => this.toDomainEntity(page));
  }
}
