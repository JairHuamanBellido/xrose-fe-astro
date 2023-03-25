import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";
import type { ContentfulMediaFileContentType } from "../../../mediaFile/infrastructure/ContentfulMediaFileContentType.interface";

export type ContentfulSectionHeroContentType = {
  readonly heading: string;
  readonly body: Document;
  readonly component_id: "SectionHero";
  readonly image: Entry<ContentfulMediaFileContentType>;
};
