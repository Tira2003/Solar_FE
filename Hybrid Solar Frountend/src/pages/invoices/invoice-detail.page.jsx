import { useParams, Link } from "react-router";
import { useGetInvoiceByIdQuery } from "@/lib/redux/query";

const InvoiceDetailPage = () => {
  const { id } = useParams();
  const { data: invoice, isLoading, isError, error } = useGetInvoiceByIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 text-lg">Failed to load invoice</p>
          <p className="text-gray-500 mt-2">{error?.data?.message || "Please try again later"}</p>
          <Link
            to="/dashboard/invoices"
            className="mt-4 inline-block px-4 py-2 text-sm font-medium text-primary hover:underline"
          >
            ← Back to Invoices
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    if (amount === undefined || amount === null) return "$0.00";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <main className="mt-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <Link
            to="/dashboard/invoices"
            className="text-sm text-gray-500 hover:text-primary mb-2 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Invoices
          </Link>
          <h1 className="text-4xl font-bold text-foreground">
            Invoice #{invoice?.invoiceNumber || id?.slice(-8)}
          </h1>
        </div>
        <span
          className={`px-4 py-2 text-sm font-medium rounded-full border ${getStatusColor(invoice?.status)}`}
        >
          {invoice?.status || "Unknown"}
        </span>
      </div>

      {/* Invoice Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Invoice Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Billing Period</p>
            <p className="text-sm font-medium text-foreground mt-1">
              {formatDate(invoice?.billingPeriodStart)} - {formatDate(invoice?.billingPeriodEnd)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Due Date</p>
            <p className="text-sm font-medium text-foreground mt-1">
              {formatDate(invoice?.dueDate)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Issue Date</p>
            <p className="text-sm font-medium text-foreground mt-1">
              {formatDate(invoice?.createdAt)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Payment Date</p>
            <p className="text-sm font-medium text-foreground mt-1">
              {invoice?.paidAt ? formatDate(invoice.paidAt) : "Not paid yet"}
            </p>
          </div>
        </div>

        {/* Energy & Amount Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">kWh Generated</p>
                <p className="text-xl font-bold text-foreground">
                  {invoice?.kwhGenerated?.toLocaleString() || 0} kWh
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Rate per kWh</p>
                <p className="text-xl font-bold text-foreground">
                  {formatCurrency(invoice?.ratePerKwh || 0.12)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Total Amount</p>
                <p className="text-xl font-bold text-foreground">
                  {formatCurrency(invoice?.amount)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section (if any) */}
        {invoice?.notes && (
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Notes</h3>
            <p className="text-sm text-gray-600">{invoice.notes}</p>
          </div>
        )}

        {/* Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
          {invoice?.status?.toLowerCase() === "pending" && (
            <Link
              to={`/dashboard/invoices/${id}/pay`}
              className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Pay Now - {formatCurrency(invoice?.amount)}
            </Link>
          )}
          {invoice?.status?.toLowerCase() === "paid" && (
            <button
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => window.print()}
            >
              Download Receipt
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default InvoiceDetailPage;
