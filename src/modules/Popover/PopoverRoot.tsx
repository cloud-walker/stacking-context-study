import { Popover, type PopoverRootProps } from "@ark-ui/react";

export function PopoverRoot({
  children,
  portal = false,
  placement,
}: {
  children: React.ReactNode;
  portal?: boolean;
  placement?: NonNullable<PopoverRootProps["positioning"]>["placement"];
}) {
  return (
    <Popover.Root portalled={portal} positioning={{ placement }}>
      {children}
    </Popover.Root>
  );
}
