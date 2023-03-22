import type { Entry } from "contentful";
import type { ContentfulPageContentType } from "../../../page/infrastructure/model/ContentfulPageContentType.interface";

export interface ContentfulSubpartNavigationContentType {
  readonly label: string;
  readonly page: Entry<ContentfulPageContentType>;
}
