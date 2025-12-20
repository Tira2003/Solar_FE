import { useSearchParams, Link } from "react-router";
import { useGetSessionStatusQuery } from "@/lib/redux/query";
import Loader from "@/components/loader";

export default function PaymentCompletePage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { data, isLoading } = useGetSessionStatusQuery(sessionId, {
    skip: !sessionId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  const isSuccess = data?.paymentStatus === "paid";

  return (
    <main className="mt-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-12 shadow-sm text-center">
          {isSuccess ? (
            <>
              {/* Success Icon */}
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="mt-6 text-3xl font-bold text-foreground">
                Payment Successful!
              </h1>
              <p className="mt-2 text-gray-600">
                Thank you for your payment. Your transaction has been completed.
              </p>

              {/* Payment Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount Paid</span>
                  <span className="text-2xl font-bold text-foreground">
                    ${(data.amountTotal / 100).toFixed(2)}
                  </span>
                </div>
                {data?.customerEmail && (
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Confirmation sent to</span>
                    <span className="font-medium text-foreground">
                      {data.customerEmail}
                    </span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Failed Icon */}
              <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h1 className="mt-6 text-3xl font-bold text-foreground">
                Payment Failed
              </h1>
              <p className="mt-2 text-gray-600">
                We couldn't process your payment. Please try again or contact support.
              </p>
            </>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard/invoices"
              className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                isSuccess
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Back to Invoices
            </Link>
            {!isSuccess && (
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
