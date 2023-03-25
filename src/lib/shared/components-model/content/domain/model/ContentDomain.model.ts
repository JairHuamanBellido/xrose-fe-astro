import type { SectionHeroDomain } from "../../../sectionHero/domain/model/SectionHeroDomain.model";

export interface ContentDomain {
  sections: Array<SectionHeroDomain | null>;
}
