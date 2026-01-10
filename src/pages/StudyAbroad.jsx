import { TopSection } from "../components/StudyAbroad/TopSection";
import { CountryGrid } from "../components/StudyAbroad/CountryGrid";
import UniversitySwiper from "../components/StudyAbroad/UniversitySwiper";
UniversitySwiper;

const StudyAbroad = () => {
  return (
    <div className="min-h-screen">
      <TopSection />
      <CountryGrid />
      <UniversitySwiper />
    </div>
  );
};

export default StudyAbroad;
