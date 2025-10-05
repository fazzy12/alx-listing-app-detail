import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  // id is the property name, as per the find logic in the instruction snippet
  const { id } = router.query;
  
  // Lookup property by name (string)
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id) as PropertyProps | undefined;

  if (router.isFallback || !id) {
    return <p className="text-center p-10">Loading property details...</p>;
  }
  
  if (!property) return <p className="text-center p-10 text-red-600 font-bold">Property not found</p>;

  return (
    <div className="min-h-screen bg-white">
      <PropertyDetail property={property} />
    </div>
  );
}