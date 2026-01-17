import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-md">
      {toasts.filter((t) => t.open !== false).map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto rounded-lg border shadow-lg p-4 transition-all duration-300",
            "animate-in slide-in-from-right-full",
            toast.variant === "destructive"
              ? "bg-red-600 text-white border-red-700"
              : toast.variant === "success"
              ? "bg-green-600 text-white border-green-700"
              : "bg-white text-gray-900 border-gray-200"
          )}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              {toast.title && (
                <p className="font-semibold text-sm">{toast.title}</p>
              )}
              {toast.description && (
                <p className={cn(
                  "text-sm mt-1",
                  toast.variant === "destructive" || toast.variant === "success"
                    ? "text-white/90"
                    : "text-gray-600"
                )}>
                  {toast.description}
                </p>
              )}
            </div>
            <button
              onClick={() => dismiss(toast.id)}
              className={cn(
                "p-1 rounded-md hover:bg-black/10 transition-colors",
                toast.variant === "destructive" || toast.variant === "success"
                  ? "text-white/80 hover:text-white"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
