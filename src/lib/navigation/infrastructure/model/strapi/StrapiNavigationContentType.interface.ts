import type { StrapiSubpartNavigationContentType } from "./StrapiSubpartNavigationContentType.interface";

export interface StrapiNavigationContentType {
  readonly subpart_navigations: StrapiSubpartNavigationContentType[];
}

export interface StrapiNavigationResponse {
  readonly data: StrapiNavigationContentType;
}
