import type { ContentDomain } from "../../../shared/components-model/content/domain/model/ContentDomain.model";

export interface PageDomain {
  readonly slug: string;
  readonly content: ContentDomain;
}
