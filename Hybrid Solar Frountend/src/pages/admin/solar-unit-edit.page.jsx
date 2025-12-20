import { useGetSolarUnitByIdQuery } from "@/lib/redux/query";
import { useNavigate, useParams } from "react-router";
import { EditSolarUnitForm } from "./components/EditSolarUnitForm";
import Loader from "@/components/loader";
import ErrorPage from "@/components/ErrorPage";

export default function SolarUnitEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitByIdQuery(id);
  
  console.log(solarUnit);

  if (isLoadingSolarUnit) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isErrorSolarUnit) {
    return (
      <ErrorPage 
        title="Unable to Load Solar Unit"
        message="We couldn't retrieve the solar unit information. Please try again."
        errorDetails={errorSolarUnit?.data?.message || errorSolarUnit?.message}
      />
    );
  }

  const handleEdit = () => {
    // TODO: Navigate to edit page
    console.log("Edit solar unit:", solarUnit._id);
  };

  const handleDelete = () => {
    // TODO: Implement delete with confirmation
    console.log("Delete solar unit:", solarUnit._id);
  };

  return (
    <main className="mt-4">
      <h1 className="text-4xl font-bold text-foreground">Edit Solar Unit</h1>
      <h2 className="mt-4 text-2xl font-bold text-foreground">{solarUnit.serialNumber}</h2>
      <p className="text-gray-600 mt-2">Edit the details of the solar unit</p>'
      
      <div className="mt-8">
        <EditSolarUnitForm solarUnit={solarUnit} />
      </div>
    </main>
  );
}
