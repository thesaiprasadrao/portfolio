"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export interface PhoneButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

/**
 * Gradient Phone-style icon button.
 * Matches the phoneButton pattern but uses a phone SVG icon.
 */
export const PhoneButton: React.FC<PhoneButtonProps> = ({ className, label = "Phone", ...props }) => {
  return (
    <button
      aria-label={label}
      className={cn("phone-btn pt-1", className)}
      type="button"
      {...props}
    >
        <span className="phone-svg-wrapper">
            <svg
            fill="white"
            className="phone-svg"
            viewBox="0 0 24 24"
            height="1.5em"
            aria-hidden="true"
            focusable="false"
            >
            <path d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/>
            </svg>
        </span>
      <span className="phone-bg" aria-hidden="true" />
    </button>
  )
}

PhoneButton.displayName = "PhoneButton"
