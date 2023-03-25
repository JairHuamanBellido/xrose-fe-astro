import { ContentfulPageRepository } from "../../infrastructure/repository/ContentfulPageRepository";
import { ContentfulPageMapper } from "../mapper/contentful/ContentfulPageMapper";
import type { PageDomain } from "../model/PageDomain.model";

export class GetPageBySlugUseCase {
  static async execute(slug: string): Promise<PageDomain> {
    const contentful_page = await ContentfulPageRepository.findBySlug(slug);
    return ContentfulPageMapper.toDomainEntity(contentful_page);
  }
}
