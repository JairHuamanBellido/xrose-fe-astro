import type { Entry } from "contentful";
import type { ContentfulSubpartButtonContentType } from "../../infrastructure/model/ContentfulSubpartButtonContentType.interface";
import type { SubpartButtonDomain } from "../model/SubpartButtonDomain.model";

export class ContentfulSubpartButtonMapper {
  static toDomainEntity(
    contentfulSubpartButton: Entry<ContentfulSubpartButtonContentType>
  ): SubpartButtonDomain {
    return {
      text: contentfulSubpartButton.fields.text,
      variant: contentfulSubpartButton.fields.variant,
    };
  }

  static toDomainEntities(
    contentfulSubpartButtons: Entry<ContentfulSubpartButtonContentType>[]
  ): SubpartButtonDomain[] {
    return contentfulSubpartButtons.map((button) =>
      this.toDomainEntity(button)
    );
  }
}
