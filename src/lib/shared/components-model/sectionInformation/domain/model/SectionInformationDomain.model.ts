import type { Document } from "@contentful/rich-text-types";
import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";
import type { SubpartButtonDomain } from "../../../subpartButton/domain/model/SubpartButtonDomain.model";

export interface SectionInformationDomain {
  readonly heading: string;
  readonly body: Document;
  readonly button?: SubpartButtonDomain;
  readonly image: MediaFileDomain;
  readonly reverse: boolean;
  readonly contentTypeId:string;
}
