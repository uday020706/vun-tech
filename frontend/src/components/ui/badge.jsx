import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
      variant === "default" && "bg-fog text-ink",
      variant === "outline" && "border border-fog text-slate",
      variant === "success" && "bg-moss/10 text-moss",
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export { Badge }
