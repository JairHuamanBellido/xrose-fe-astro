import { HttpClient } from "../../../core/httpClient";
import type { StrapiPageResponse } from "../model/strapi/StrapiPageContentType.interface";
import qs from "qs";

export class StrapiPageRepository {
  async findBySlug(slug: string): Promise<StrapiPageResponse> {
    const queryParams = qs.parse(`populate=*&filters[slug][$eq]=${slug}`);
    const { data } = await HttpClient.get<StrapiPageResponse>("/pages", {
      params: queryParams,
    });

    return data;
  }
}
