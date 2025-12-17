import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group relative flex flex-col gap-6 rounded-xl py-6 overflow-hidden",
        // Glassmorphism effect
        "backdrop-blur-md border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-blue-500/40",
        // Shadow and hover effects
        "shadow-lg hover:shadow-blue-500/25 hover:shadow-xl",
        "hover:bg-blue-500/20 hover:border-blue-400/50",
        // Scale and transform on hover
        "hover:scale-[1.02] hover:-translate-y-1",
        // Smooth transitions
        "transition-all duration-1000 ease-out cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Sweeping gradient animation on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full 
      group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      {/* Content with relative z-index */}
      <div className="relative z-10 contents">
        {props.children}
      </div>
    </div>
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
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
}
