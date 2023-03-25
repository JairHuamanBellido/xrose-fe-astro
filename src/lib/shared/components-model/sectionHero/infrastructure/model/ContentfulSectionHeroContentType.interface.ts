import type { Document } from "@contentful/rich-text-types";

export type ContentfulSectionHeroContentType = {
  readonly heading: string;
  readonly body: Document;
  readonly component_id: "SectionHero";
};
