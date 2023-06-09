import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";
import type { ContentfulMediaFileContentType } from "../../../mediaFile/infrastructure/ContentfulMediaFileContentType.interface";
import type { ContentfulSubpartButtonContentType } from "../../../subpartButton/infrastructure/model/ContentfulSubpartButtonContentType.interface";
import type { ContentfulSubpartTrustedCompaniesContentType } from "../../../subpartTrustedCompanies/infrastructure/model/ContentfulSubpartTrustedCompaniesContentType.interface";

export type ContentfulSectionHeroContentType = {
  readonly heading: string;
  readonly body: Document;
  readonly component_id: "SectionHero";
  readonly image: Entry<ContentfulMediaFileContentType>;
  readonly button?: Entry<ContentfulSubpartButtonContentType>;
  readonly trustedCompanies?: Entry<ContentfulSubpartTrustedCompaniesContentType>;
};
