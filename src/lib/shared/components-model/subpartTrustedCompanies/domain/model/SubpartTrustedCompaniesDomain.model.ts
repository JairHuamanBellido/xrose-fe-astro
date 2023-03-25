import type { MediaFileDomain } from "../../../mediaFile/domain/model/MediaFileDomain.model";
export interface SubpartTrustedCompaniesDomain {
  readonly label: string;
  readonly companies_logo: MediaFileDomain[];
}
