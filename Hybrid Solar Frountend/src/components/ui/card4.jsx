import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative h-auto min-h-[18em] w-full max-w-[20em] border-2 border-[rgba(30, 39, 133, 0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(30, 39, 133, 1)] via-blue-700/80 to-[rgba(30, 39, 133, 0.2)] text-white font-nunito p-[1.5em] flex flex-col gap-6 backdrop-blur-[12px] hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group/card hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em] pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30, 39, 133, 0.1),transparent_60%)] group-hover/card:animate-pulse pointer-events-none rounded-[1.5em]" />
      
      {/* Top right decorative dots */}
      <div className="absolute top-4 right-4 flex gap-2 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-blue-300/50" />
        <div className="w-2 h-2 rounded-full bg-blue-300/30" />
        <div className="w-2 h-2 rounded-full bg-blue-300/10" />
      </div>
      
      {/* Bottom left decorative element */}
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent blur-sm group-hover/card:animate-pulse pointer-events-none" />
      
      {/* Content wrapper with z-index */}
      <div className="relative z-10 flex flex-col gap-6 flex-1">
        {props.children}
      </div>
    </div>
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] transition-transform duration-300 group-hover/card:translate-y-[-2px]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h1
      data-slot="card-title"
      className={cn(
        "text-[2.2em] font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-none",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn(
        "text-[0.9em] text-blue-100 leading-relaxed font-light",
        className
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("space-y-3", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center mt-auto", className)}
      {...props}
    />
  );
}

// Optional: A styled button component that matches the card design
function CardButton({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "relative h-fit w-fit px-[1.4em] py-[0.7em] border-[1px] border-blue-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-blue-500/10",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-fuchsia-500/40 to-blue-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" /> 
      <span className="relative z-10 font-medium tracking-wide">{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardButton,
}