import type { Document } from "@contentful/rich-text-types";
import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";
import type { SubpartButtonDomain } from "../../../subpartButton/domain/model/SubpartButtonDomain.model";

export interface SectionHeroDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly htmlBody: Document;
  readonly image: MediaFileDomain;
  readonly button?: SubpartButtonDomain;
}
