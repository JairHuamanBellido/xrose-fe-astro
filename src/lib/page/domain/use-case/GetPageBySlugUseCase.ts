import type { UseCase } from "../../../shared/use-case/use-case.interface";
import { StrapiPageRepository } from "../../infrastructure/repository/StrapiPageRepository";
import { StrapiPageMapper } from "../mapper/StrapiPageMapper";
import type { PageDomain } from "../model/PageDomain.model";

export class GetPageBySlugUseCase implements UseCase<string, PageDomain> {
  private strapiPageRepository: StrapiPageRepository;
  constructor() {
    this.strapiPageRepository = new StrapiPageRepository();
  }

  async execute(slug: string): Promise<PageDomain> {
    const { data } = await this.strapiPageRepository.findBySlug(slug);
    return StrapiPageMapper.toDomainEntity(data[0]);
  }
}
