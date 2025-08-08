// src/components/ui/badge.tsx
import * as React from "react";
import { type VariantProps } from "class-variance-authority"; // You still need VariantProps
import { cn } from "@/lib/utils";

// Import badgeVariants from the new file
import { badgeVariants } from "@/lib/badge-variants"; // Adjust the path as needed

// Defines the props for the Badge component
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

// Badge component definition
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge }; // Only export the component from this file