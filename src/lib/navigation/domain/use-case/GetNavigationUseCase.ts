import type { UseCase } from "../../../shared/use-case/use-case.interface";
import { ContentfulNavigationRepository } from "../../infrastructure/repository/ContentfulNavigationRepository";
import { StrapiMainNavigationRepository } from "../../infrastructure/repository/StrapiMainNavigationRepository";
import { ContentfulNavigationMapper } from "../mapper/contentful/ContentfulNavigationMapper";
import { StrapiNavigationMapper } from "../mapper/strapi/StrapiNavigationMapper";
import type { NavigationDomain } from "../model/NavigationDomain.model";

export class GetNavigationUseCase
  implements UseCase<undefined, NavigationDomain>
{
  // private strapiNavigationRepository: StrapiMainNavigationRepository;
  private contentfulNavigationRepository: ContentfulNavigationRepository;
  constructor() {
    // this.strapiNavigationRepository = new StrapiMainNavigationRepository();
    this.contentfulNavigationRepository = new ContentfulNavigationRepository();
  }

  async execute(): Promise<NavigationDomain> {
    // const { data } = await this.strapiNavigationRepository.get();
    // return StrapiNavigationMapper.toDomainEntity(data);
    const contentful_navigation =
      await this.contentfulNavigationRepository.get();
    return ContentfulNavigationMapper.toDomainEntity(contentful_navigation);
  }
}
