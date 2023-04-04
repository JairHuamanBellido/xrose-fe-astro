import SectionHero from "../../../components/SectionHero/SectionHero.astro";
import SectionRecommendations from "../../../components/SectionRecommendations/SectionRecommendations.astro";
import SectionInformation from "../../../components/SectionInformation/SectionInformation.astro";
import SectionFeatures from "../../../components/SectionFeatures/SectionFeatures.astro";
export const componentDictionary: { [key: string]: any } = {
  sectionHero: SectionHero,
  sectionRecommendations: SectionRecommendations,
  sectionInformation: SectionInformation,
  sectionFeatures: SectionFeatures,
};
