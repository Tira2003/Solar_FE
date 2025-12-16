import { Link } from "react-router";
import { useGetAdminPendingInvoicesQuery } from "@/lib/redux/query";

/**
 * PendingInvoicesList Component
 * Displays a list of pending invoices for admin dashboard
 */
export function PendingInvoicesList() {
  const { data: invoices, isLoading, isError } = useGetAdminPendingInvoicesQuery({ limit: 10 });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-48 items-center justify-center text-red-500">
        Failed to load pending invoices
      </div>
    );
  }

  if (!invoices || invoices.length === 0) {
    return (
      <div className="flex h-48 flex-col items-center justify-center text-gray-500">
        <svg className="h-12 w-12 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p>No pending invoices</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-left text-sm font-medium text-gray-500">
            <th className="pb-3 pr-4">Invoice</th>
            <th className="pb-3 pr-4">User</th>
            <th className="pb-3 pr-4">Solar Unit</th>
            <th className="pb-3 pr-4">Energy (kWh)</th>
            <th className="pb-3 pr-4">Due Date</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {invoices.map((invoice) => (
            <tr key={invoice._id} className="text-sm hover:bg-gray-50 transition-colors">
              <td className="py-3 pr-4">
                <span className="font-medium text-blue-600">
                  {invoice.invoiceNumber}
                </span>
              </td>
              <td className="py-3 pr-4">
                <div>
                  <p className="font-medium text-gray-900">{invoice.user?.name || "N/A"}</p>
                  <p className="text-xs text-gray-500">{invoice.user?.email || ""}</p>
                </div>
              </td>
              <td className="py-3 pr-4">
                <span className="text-gray-700">
                  {invoice.solarUnit?.serialNumber || "N/A"}
                </span>
              </td>
              <td className="py-3 pr-4 font-medium text-gray-900">
                {invoice.kwhGenerated?.toFixed(2) || "0.00"}
              </td>
              <td className="py-3 pr-4 text-gray-600">
                {formatDate(invoice.dueDate)}
              </td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    invoice.isOverdue
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {invoice.isOverdue ? "Overdue" : "Pending"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingInvoicesList;
