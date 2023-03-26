import type { Entry } from "contentful";
import { ContentfulMediaFileMapper } from "../../../mediaFile/domain/mapper/ContentfulMediaFileMapper";
import { ContentfulSubpartButtonMapper } from "../../../subpartButton/domain/mapper/ContentfulSubpartButtonMapper";
import type { ContentfulSectionInformationContentType } from "../../infrastructure/model/ContentfulSectionInformationContentType.interface";
import type { SectionInformationDomain } from "../model/SectionInformationDomain.model";

export class ContentfulSectionInformationMapper {
  static toDomainEntity(
    contentfulSectionInformation: Entry<ContentfulSectionInformationContentType>
  ): SectionInformationDomain {
    const button = contentfulSectionInformation.fields.button
      ? ContentfulSubpartButtonMapper.toDomainEntity(
          contentfulSectionInformation.fields.button
        )
      : undefined;
    return {
      heading: contentfulSectionInformation.fields.heading,
      body: contentfulSectionInformation.fields.body,
      image: ContentfulMediaFileMapper.toDomainEntity(
        contentfulSectionInformation.fields.image
      ),
      reverse: !!contentfulSectionInformation.fields.reverse,
      button,
    };
  }
}
