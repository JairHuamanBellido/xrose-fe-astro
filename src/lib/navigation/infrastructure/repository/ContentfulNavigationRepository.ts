import type { Entry } from "contentful";
import { contentfulClient } from "../../../shared/contentful/connection/contentful";
import type { ContentfulNavigationContentType } from "../model/contentful/ContentfulNavigationContentType.interface";

export class ContentfulNavigationRepository {
  static async get(): Promise<Entry<ContentfulNavigationContentType>> {
    const contentful_response =
      await contentfulClient.getEntries<ContentfulNavigationContentType>({
        content_type: "navigation",
        include: 10,
      });

    return contentful_response.items[0];
  }
}
