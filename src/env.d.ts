/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_API_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_API_TOKEN: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
}
