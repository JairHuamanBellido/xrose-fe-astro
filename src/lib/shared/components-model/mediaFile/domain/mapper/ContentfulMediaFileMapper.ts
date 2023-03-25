import type { Entry } from "contentful";
import type { ContentfulMediaFileContentType } from "../../infrastructure/ContentfulMediaFileContentType.interface";
import type { MediaFileDomain } from "../model/MediaFileDomain.model";

export class ContentfulMediaFileMapper {
  static toDomainEntity(
    contentMediaFile: Entry<ContentfulMediaFileContentType>
  ): MediaFileDomain {
    return {
      altText: contentMediaFile.fields.altText,
      url: contentMediaFile.fields.media.fields.file.url,
    };
  }

  static toDomainEntities(
    contentMediaFiles: Entry<ContentfulMediaFileContentType>[]
  ): MediaFileDomain[] {
    return contentMediaFiles.map((mediaFile) => this.toDomainEntity(mediaFile));
  }
}
