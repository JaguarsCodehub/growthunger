"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, icon, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-gray-300">
              {icon && <div className="mr-2">{icon}</div>}
              <div className="flex-1">
                {title && <h4 className="font-bold">{title}</h4>}
                {description && <p className="text-sm text-gray-600">{description}</p>}
              </div>
              {/* <button className="ml-2 text-gray-500 hover:text-gray-800" onClick={() => { }}>
                &times;
              </button> */}
            </div>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
