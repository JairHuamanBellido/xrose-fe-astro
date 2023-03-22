import type { UseCase } from "../../../shared/use-case/use-case.interface";
import { StrapiMainNavigationRepository } from "../../infrastructure/repository/StrapiMainNavigationRepository";
import { StrapiNavigationMapper } from "../mapper/StrapiNavigationMapper";
import type { NavigationDomain } from "../model/NavigationDomain.model";

export class GetNavigationUseCase
  implements UseCase<undefined, NavigationDomain>
{
  private strapiNavigationRepository: StrapiMainNavigationRepository;
  constructor() {
    this.strapiNavigationRepository = new StrapiMainNavigationRepository();
  }

  async execute(): Promise<NavigationDomain> {
    const { data } = await this.strapiNavigationRepository.get();
    return StrapiNavigationMapper.toDomainEntity(data);
  }
}
