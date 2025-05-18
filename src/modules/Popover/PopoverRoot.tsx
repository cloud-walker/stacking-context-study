import { Popover } from "@ark-ui/react";

export function PopoverRoot({
  children,
  portal = false,
}: {
  children: React.ReactNode;
  portal?: boolean;
}) {
  return <Popover.Root portalled={portal}>{children}</Popover.Root>;
}
