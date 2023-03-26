import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";
import type { ContentfulMediaFileContentType } from "../../../mediaFile/infrastructure/ContentfulMediaFileContentType.interface";
import type { ContentfulSubpartButtonContentType } from "../../../subpartButton/infrastructure/model/ContentfulSubpartButtonContentType.interface";

export interface ContentfulSectionInformationContentType {
  readonly heading: string;
  readonly body: Document;
  readonly image: Entry<ContentfulMediaFileContentType>;
  readonly button?: Entry<ContentfulSubpartButtonContentType>;
  readonly reverse?: boolean;
}
