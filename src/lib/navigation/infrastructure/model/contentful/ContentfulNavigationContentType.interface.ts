import type { Entry, EntryCollection } from "contentful";
import type { ContentfulSubpartNavigationContentType } from "./ContentfulSubpartNavigationContentType.interface";

export interface ContentfulNavigationContentType {
  readonly navItems: Entry<ContentfulSubpartNavigationContentType>[];
}
