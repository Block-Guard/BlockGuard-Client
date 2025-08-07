// src/components/sonner.tsx

import { Toaster, type ToasterProps } from "sonner"

export function PlainToast(props: ToasterProps) {
  return (
    <Toaster
      {...props}
      position="top-center"
      toastOptions={{
        classNames: {
          toast: "bg-[#EDEEF0] px-3 py-4 rounded-[10px]",
          title: "text-[#000B25] text-xl font-medium leading-loose",
        },
        style:{
           maxWidth: "100vw",
        }
      }}
    />
  )
}
