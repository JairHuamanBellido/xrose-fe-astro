import type { Entry } from "contentful";
import type { ContentfulMediaFileContentType } from "../../../mediaFile/infrastructure/ContentfulMediaFileContentType.interface";

export interface ContentfulSubpartTrustedCompaniesContentType {
  readonly label: string;
  readonly companies: Entry<ContentfulMediaFileContentType>[];
}
