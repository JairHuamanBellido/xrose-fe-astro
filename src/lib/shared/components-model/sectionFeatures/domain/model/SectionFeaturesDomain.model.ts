import type { Document } from "@contentful/rich-text-types";
import type { SubpartFeaturedCardDomain } from "../../../subpartFeaturedCard/domain/model/SubpartFeaturedCardDomain.model";

export interface SectionFeaturesDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly body?: Document;
  readonly features: SubpartFeaturedCardDomain[];
}
