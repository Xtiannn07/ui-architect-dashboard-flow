
import React from "react"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number
}

export function AvatarGroup({
  className,
  limit,
  children,
  ...props
}: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children)
  const limitedChildren = limit ? childrenArray.slice(0, limit) : childrenArray
  const overflowCount = limit ? childrenArray.length - limit : 0

  return (
    <div
      className={cn(
        "flex -space-x-2 overflow-hidden",
        className
      )}
      {...props}
    >
      {limitedChildren}
      {overflowCount > 0 && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
          +{overflowCount}
        </div>
      )}
    </div>
  )
}
