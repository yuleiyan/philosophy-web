import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
    "relative rounded-full h-14 w-14 border border-primary inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "bg-transparent [--text-intro:#fff] [--text-intro-hover:#79644b]",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                intro: `[--text-intro:#000] [--text-intro-hover:#79644b] md:[--text-intro:#fff] md:[--text-intro-hover:#79644b]
                    bg-white md:bg-transparent border-0 md:border h-8 w-8 md:h-14 md:w-14`,
            },
            size: {
                default: "h-14 w-14",
                sm: "h-8 w-8",
                lg: "h-16 w-16",
                '2xl': "h-28 w-28"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

const Button = motion(BaseButton);

export { Button, buttonVariants }
