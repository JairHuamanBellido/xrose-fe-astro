import type { Entry } from "contentful";
import { contentfulClient } from "../../../shared/contentful/connection/contentful";
import type { ContentfulPageContentType } from "../model/contentful/ContentfulPageContentType.interface";

export class ContentfulPageRepository {
  static async findBySlug(
    slug: string
  ): Promise<Entry<ContentfulPageContentType>> {
    const contentful_response =
      await contentfulClient.getEntries<ContentfulPageContentType>({
        content_type: "page",
        "fields.slug": slug,
        include: 10,
      });
    return contentful_response.items[0];
  }
}
