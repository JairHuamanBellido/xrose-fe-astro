import type { Entry } from "contentful";
import { ContentfulMediaFileMapper } from "../../../mediaFile/domain/mapper/ContentfulMediaFileMapper";
import type { ContentfulSubpartTrustedCompaniesContentType } from "../../infrastructure/model/ContentfulSubpartTrustedCompaniesContentType.interface";
import type { SubpartTrustedCompaniesDomain } from "../model/SubpartTrustedCompaniesDomain.model";

export class ContentfulSubpartTrustedCompaniesMapper {
  static toDomainEntity(
    contentfulSubpartTrustedCompany: Entry<ContentfulSubpartTrustedCompaniesContentType>
  ): SubpartTrustedCompaniesDomain {
    return {
      label: contentfulSubpartTrustedCompany.fields.label,
      companies_logo: ContentfulMediaFileMapper.toDomainEntities(
        contentfulSubpartTrustedCompany.fields.companies
      ),
    };
  }

  static toDomainEntities(
    contentfulSubpartTrustedCompanies: Entry<ContentfulSubpartTrustedCompaniesContentType>[]
  ): SubpartTrustedCompaniesDomain[] {
    return contentfulSubpartTrustedCompanies.map((trustedCompanies) =>
      this.toDomainEntity(trustedCompanies)
    );
  }
}
