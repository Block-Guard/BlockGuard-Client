import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-center"
      className="toaster group"
      style={
        {
          "--normal-bg": "rgba(255, 255, 255, 0.80)",
          "--normal-border": "transparent",
          "--normal-text": "#000B25",
          "--border-radius": "10px",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          fontFamily: "Pretendard",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.80)",
          backdropFilter: "blur(3.9px)",
          padding: "16px 12px",
          fontSize: "20px",
          fontWeight: "600",
          border: "none",
          color: "#000B25",
        },
        classNames: {
          toast: "backdrop-blur-sm",
          description: "text-gray-600",
          actionButton: "bg-blue-500 text-white rounded-lg px-3 py-1",
          cancelButton: "bg-gray-200 text-gray-700 rounded-lg px-3 py-1",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
