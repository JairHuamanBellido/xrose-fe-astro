import type { PageDomain } from "../../../page/domain/model/PageDomain.model";

export interface SubpartNavigationDomain {
  readonly label: string;
  readonly page: PageDomain;
}
