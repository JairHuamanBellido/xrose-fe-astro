import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";

export interface SectionHeroDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly htmlBody: string;
  readonly image: MediaFileDomain;
}
