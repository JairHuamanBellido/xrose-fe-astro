import type { Entry } from "contentful";
import type { ContentfulContentType } from "../../../../shared/components-model/content/infrastructure/model/ContentfulContentType.interface";

export interface ContentfulPageContentType {
  readonly slug: string;
  readonly content: Entry<ContentfulContentType>;
}
