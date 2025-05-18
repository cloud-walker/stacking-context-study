import { Popover } from "@ark-ui/react";

export function PopoverTrigger({ children }: { children?: React.ReactNode }) {
  return <Popover.Trigger>{children}</Popover.Trigger>;
}
