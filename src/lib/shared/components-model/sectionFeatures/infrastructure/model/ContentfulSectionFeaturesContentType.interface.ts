import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";
import type { ContentfulSubpartFeaturedCardContentType } from "../../../subpartFeaturedCard/infrastructure/model/ContentfulSubpartFeaturedCardContentType.interface";

export interface ContentfulSectionFeaturesContentType {
  readonly heading: string;
  readonly body?: Document;
  readonly features: Entry<ContentfulSubpartFeaturedCardContentType>[];
}
