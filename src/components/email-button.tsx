"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export interface EmailButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

/**
 * Gradient Email-style icon button.
 * Provided HTML/CSS converted to a reusable TSX component.
 */
export const EmailButton: React.FC<EmailButtonProps> = ({ className, label = "Email", ...props }) => {
  return (
    <button
      aria-label={label}
      className={cn("email-btn pt-0.5", className)}
      type="button"
      {...props}
    >
      <span className="email-svg-wrapper">
        <svg
          fill="white"
          className="email-svg"
          viewBox="0 0 24 24"
          height="1.5em"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z" />
        </svg>
      </span>
      <span className="email-bg" aria-hidden="true" />
    </button>
  )
}

EmailButton.displayName = "EmailButton"