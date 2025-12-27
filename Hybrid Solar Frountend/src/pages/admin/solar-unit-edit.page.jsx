import { useGetSolarUnitByIdQuery } from "@/lib/redux/query";
import { useNavigate, useParams } from "react-router";
import { EditSolarUnitForm } from "./components/EditSolarUnitForm";
import Loader from "@/components/loader";
import ErrorPage from "@/components/ErrorPage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  Zap, 
  Settings,
  User
} from "lucide-react";
import { format } from "date-fns";

export default function SolarUnitEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitByIdQuery(id);

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

  const getStatusVariant = (status) => {
    switch (status) {
      case "ACTIVE":
        return "default";
      case "INACTIVE":
        return "secondary";
      case "MAINTENANCE":
        return "destructive";
      default:
        return "outline";
    }
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch {
      return "N/A";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
      {/* Back Navigation */}
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-600 hover:text-gray-900 hover:bg-white/50 -ml-2"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Solar Units
      </Button>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Edit Solar Unit</h1>
                <p className="text-gray-500 mt-1">
                  Update the configuration and details of this unit
                </p>
              </div>
            </div>
            <Badge 
              variant={getStatusVariant(solarUnit.status)}
              className="text-sm px-3 py-1"
            >
              {solarUnit.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Unit Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                Unit Information
              </h3>
              
              <div className="space-y-4">
                {/* Serial Number */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Settings className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Serial Number</p>
                    <p className="font-semibold text-gray-900">{solarUnit.serialNumber}</p>
                  </div>
                </div>

                {/* Installation Date */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Installation Date</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(solarUnit.installationDate)}
                    </p>
                  </div>
                </div>

                {/* Capacity */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Zap className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="font-semibold text-gray-900">{solarUnit.capacity} kW</p>
                  </div>
                </div>

                {/* Assigned User */}
                {solarUnit.userId && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Assigned User</p>
                      <p className="font-semibold text-gray-900 truncate max-w-[180px]">
                        {solarUnit.userId}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Tips Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg shadow-blue-500/25">
              <h3 className="text-sm font-medium text-blue-100 uppercase tracking-wide mb-3">
                Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">•</span>
                  Set status to Maintenance when servicing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">•</span>
                  Capacity is measured in kilowatts (kW)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">•</span>
                  Changes are saved immediately
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Column - Edit Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Edit Details</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Update the solar unit configuration below
                </p>
              </div>
              
              <EditSolarUnitForm solarUnit={solarUnit} />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
