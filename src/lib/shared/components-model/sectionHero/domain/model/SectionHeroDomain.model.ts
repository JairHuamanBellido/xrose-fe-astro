import type { Document } from "@contentful/rich-text-types";
import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";
import type { SubpartButtonDomain } from "../../../subpartButton/domain/model/SubpartButtonDomain.model";
import type { SubpartTrustedCompaniesDomain } from "../../../subpartTrustedCompanies/domain/model/SubpartTrustedCompaniesDomain.model";

export interface SectionHeroDomain {
  readonly contentTypeId: string;
  readonly heading: string;
  readonly htmlBody: Document;
  readonly image: MediaFileDomain;
  readonly button?: SubpartButtonDomain;
  readonly trustedCompanies?: SubpartTrustedCompaniesDomain;
}
