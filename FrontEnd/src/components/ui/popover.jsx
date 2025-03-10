import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"

import { cn } from "@/lib/utils"

// Popover root component
const Popover = PopoverPrimitive.Root

// Popover trigger button
const PopoverTrigger = PopoverPrimitive.Trigger

// Popover content with updated styles and fixes
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none bg-white",
        // Ensure background is not transparent and remove animation classes for debugging
        "data-[state=open]:animate-none data-[state=closed]:animate-none",
        className
      )}
      {...props} 
    />
  </PopoverPrimitive.Portal>
))

PopoverContent.displayName = PopoverPrimitive.Content.displayName

// Export components
export { Popover, PopoverContent, PopoverTrigger }

