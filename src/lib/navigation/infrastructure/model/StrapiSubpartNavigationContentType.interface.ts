import type { StrapiPageContentType } from "../../../page/infrastructure/model/StrapiPageContentType.interface";

export interface StrapiSubpartNavigationContentType {
    readonly label:string;
    readonly page:StrapiPageContentType
}