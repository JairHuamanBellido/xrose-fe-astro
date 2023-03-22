import QueryString from "qs";
import { HttpClient } from "../../../core/httpClient";
import type { StrapiNavigationResponse } from "../model/strapi/StrapiNavigationContentType.interface";

export class StrapiMainNavigationRepository {
  async get(): Promise<StrapiNavigationResponse> {
    const queryParams = QueryString.parse("populate=deep");
    const { data } = await HttpClient.get<StrapiNavigationResponse>(
      "/navigation",
      {
        params: queryParams,
      }
    );

    return data;
  }
}
