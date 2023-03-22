import type { UseCase } from "../../../shared/use-case/use-case.interface";
import { ContentfulPageRepository } from "../../infrastructure/repository/ContentfulPageRepository";
import { StrapiPageRepository } from "../../infrastructure/repository/StrapiPageRepository";
import { ContentfulPageMapper } from "../mapper/contentful/ContentfulPageMapper";
import { StrapiPageMapper } from "../mapper/strapi/StrapiPageMapper";
import type { PageDomain } from "../model/PageDomain.model";

export class GetPageBySlugUseCase implements UseCase<string, PageDomain> {
  private contentfulPageRepository: ContentfulPageRepository;
  // private strapiPageRepository: StrapiPageRepository;
  constructor() {
    this.contentfulPageRepository = new ContentfulPageRepository();
    // this.strapiPageRepository = new StrapiPageRepository()
  }

  async execute(slug: string): Promise<PageDomain> {
    // const { data } = await this.strapiPageRepository.findBySlug(slug);
    // return StrapiPageMapper.toDomainEntity(data[0]);
    const contentful_page = await this.contentfulPageRepository.findBySlug(
      slug
    );
    return ContentfulPageMapper.toDomainEntity(contentful_page);
  }
}
