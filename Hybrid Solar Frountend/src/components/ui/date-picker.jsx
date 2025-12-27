import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/**
 * DatePicker component that uses the Calendar component inside a Popover
 * @param {Object} props
 * @param {Date} props.date - The selected date
 * @param {Function} props.onDateChange - Callback when date changes
 * @param {string} props.placeholder - Placeholder text when no date selected
 * @param {string} props.className - Additional classes for the button
 * @param {boolean} props.disabled - Whether the picker is disabled
 */
function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
  disabled = false,
  ...props
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
