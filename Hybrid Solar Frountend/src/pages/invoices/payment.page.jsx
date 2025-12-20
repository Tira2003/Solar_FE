import { useState } from "react";
import { useParams, Link } from "react-router";
import { useGetInvoiceByIdQuery } from "@/lib/redux/query";
import CheckoutForm from "./components/CheckoutForm";
import Loader from "@/components/loader";

const PaymentPage = () => {
  const { id } = useParams();
  const [stripeData, setStripeData] = useState(null);
  const [isLoadingStripeData, setIsLoadingStripeData] = useState(true);

  const {
    data: invoice,
    isLoading,
    isError,
    error,
  } = useGetInvoiceByIdQuery(id);

  // Handle session data from CheckoutForm
  const handleSessionCreated = (sessionData) => {
    setStripeData(sessionData);
    setIsLoadingStripeData(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
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
            className="inline-block mt-4 px-4 py-2 text-sm font-medium text-primary hover:underline"
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
      month: "short",
      day: "numeric",
    });
  };

  // Format currency from cents (Stripe uses cents)
  const formatCurrencyFromCents = (amountInCents, currency = "usd") => {
    if (amountInCents === undefined || amountInCents === null) return null;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amountInCents / 100);
  };

  // Use Stripe data if available
  const displayRatePerKwh = stripeData?.unitAmount 
    ? formatCurrencyFromCents(stripeData.unitAmount, stripeData.currency)
    : null;
  
  const displayTotalAmount = stripeData?.totalAmount 
    ? formatCurrencyFromCents(stripeData.totalAmount, stripeData.currency)
    : null;

  // Loading skeleton component
  const LoadingSkeleton = ({ width = "w-20" }) => (
    <div className={`${width} h-5 bg-gray-200 rounded animate-pulse`}></div>
  );

  return (
    <main className="mt-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/dashboard/invoices"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Complete Payment</h1>
          <p className="text-gray-600 mt-1">
            Invoice #{invoice?.invoiceNumber || id?.slice(-8)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Invoice Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-4">
            <h2 className="text-lg font-semibold text-foreground mb-4">Invoice Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Billing Period</span>
                <span className="font-medium text-foreground text-right">
                  {formatDate(invoice?.billingPeriodStart)} -<br />
                  {formatDate(invoice?.billingPeriodEnd)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Energy Generated</span>
                <span className="font-medium text-foreground">
                  {invoice?.kwhGenerated?.toLocaleString() || 0} kWh
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Rate per kWh</span>
                <span className="font-medium text-foreground">
                  {isLoadingStripeData ? (
                    <LoadingSkeleton width="w-16" />
                  ) : (
                    <span className="flex items-center gap-2">
                      {displayRatePerKwh}
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Stripe</span>
                    </span>
                  )}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Due Date</span>
                <span className="font-medium text-foreground">
                  {formatDate(invoice?.dueDate)}
                </span>
              </div>

              <div className="flex justify-between items-center py-4 mt-2 bg-gray-50 rounded-lg px-4 -mx-2">
                <span className="text-lg font-semibold text-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-primary">
                  {isLoadingStripeData ? (
                    <LoadingSkeleton width="w-24" />
                  ) : (
                    <span className="flex flex-col items-end">
                      {displayTotalAmount}
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1">From Stripe</span>
                    </span>
                  )}
                </span>
              </div>
            </div>

            {invoice?.status?.toLowerCase() === "paid" && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">This invoice has been paid</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:col-span-2">
          {invoice?.status?.toLowerCase() === "paid" ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <svg
                className="mx-auto h-16 w-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Payment Complete</h3>
              <p className="mt-2 text-gray-600">
                This invoice has already been paid. Thank you!
              </p>
              <Link
                to="/dashboard/invoices"
                className="inline-block mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All Invoices
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-6">Payment Details</h2>
              <CheckoutForm invoiceId={id} onSessionCreated={handleSessionCreated} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
