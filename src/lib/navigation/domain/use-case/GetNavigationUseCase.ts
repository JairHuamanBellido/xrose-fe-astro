import { ContentfulNavigationRepository } from "../../infrastructure/repository/ContentfulNavigationRepository";
import { ContentfulNavigationMapper } from "../mapper/contentful/ContentfulNavigationMapper";
import type { NavigationDomain } from "../model/NavigationDomain.model";

export class GetNavigationUseCase {
  static async execute(): Promise<NavigationDomain> {
    const contentful_navigation = await ContentfulNavigationRepository.get();
    return ContentfulNavigationMapper.toDomainEntity(contentful_navigation);
  }
}
