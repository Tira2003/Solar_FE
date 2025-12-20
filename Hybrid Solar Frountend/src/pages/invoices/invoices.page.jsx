import { useState } from "react";
import { useGetInvoicesQuery } from "@/lib/redux/query";
import { Link } from "react-router";
import Loader from "@/components/loader";
import ErrorPage from "@/components/ErrorPage";

const InvoicesPage = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: invoices,
    isLoading,
    isError,
    error,
  } = useGetInvoicesQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorPage 
        title="Unable to Load Invoices"
        message="We couldn't retrieve your invoice data. Please check your connection and try again."
        errorDetails={error?.data?.message || error?.message}
      />
    );
  }

  const filteredInvoices = invoices?.filter((invoice) => {
    if (statusFilter === "all") return true;
    return invoice.status?.toLowerCase() === statusFilter;
  }) || [];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-cyan-100 text-cyan-800 border-cyan-300";
      case "pending":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "overdue":
        return "bg-blue-200 text-blue-900 border-blue-400";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  
  return (
    <main className="mt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Invoices</h1>
          <p className="text-gray-600 mt-2">
            Manage your billing and payment history
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filter:</span>
          <div className="flex rounded-lg border border-blue-200 overflow-hidden">
            {["all", "pending", "paid"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  statusFilter === status
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Invoice Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-xl border border-blue-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Total Invoices</p>
          <p className="text-2xl font-bold text-blue-900 mt-1">{invoices?.length || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-blue-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Pending Payment</p>
          <p className="text-2xl font-bold text-blue-700 mt-1">
            {invoices?.filter((i) => i.status?.toLowerCase() === "pending").length || 0}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-cyan-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Paid</p>
          <p className="text-2xl font-bold text-cyan-700 mt-1">
            {invoices?.filter((i) => i.status?.toLowerCase() === "paid").length || 0}
          </p>
        </div>
      </div>

      {/* Invoices List */}
      <div className="mt-8 space-y-4">
        {filteredInvoices.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="mt-4 text-gray-600">No invoices found</p>
            <p className="text-sm text-gray-500 mt-1">
              {statusFilter !== "all"
                ? `No ${statusFilter} invoices available`
                : "Your invoices will appear here"}
            </p>
          </div>
        ) : (
          filteredInvoices.map((invoice) => (
            <div
              key={invoice._id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Invoice #{invoice.invoiceNumber || invoice._id?.slice(-8)}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status || "Unknown"}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Billing Period</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {formatDate(invoice.billingPeriodStart)} - {formatDate(invoice.billingPeriodEnd)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">kWh Generated</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {invoice.kwhGenerated?.toLocaleString() || 0} kWh
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Due Date</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {formatDate(invoice.dueDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/dashboard/invoices/${invoice._id}`}
                    className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 border border-blue-200 transition-colors"
                  >
                    View Details
                  </Link>
                  {invoice.status?.toLowerCase() === "pending" && (
                    <Link
                      to={`/dashboard/invoices/${invoice._id}/pay`}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Pay Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default InvoicesPage;
