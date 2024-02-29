declare module "@apps/types" {
  type AppSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  interface DisplayAction {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
  }
}
