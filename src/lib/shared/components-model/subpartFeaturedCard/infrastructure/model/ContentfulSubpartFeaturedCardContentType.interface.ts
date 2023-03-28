import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";

import type { ContentfulSubpartButtonContentType } from "../../../subpartButton/infrastructure/model/ContentfulSubpartButtonContentType.interface";
import type { ContentfulMediaFileContentType } from "../../../mediaFile/infrastructure/ContentfulMediaFileContentType.interface";

export interface ContentfulSubpartFeaturedCardContentType {
  readonly heading: string;
  readonly body: Document;
  readonly button: Entry<ContentfulSubpartButtonContentType>;
  readonly image: Entry<ContentfulMediaFileContentType>;
}
