import type { Document } from "@contentful/rich-text-types";
import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";

export interface SectionHeroDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly htmlBody: Document;
  readonly image: MediaFileDomain;
}
