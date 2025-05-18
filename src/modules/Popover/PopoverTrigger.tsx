import { Popover } from "@ark-ui/react";
import { cloneElement } from "react";

export function PopoverTrigger({
  children,
  as,
}: {
  children?: React.ReactNode;
  as?: React.ReactElement;
}) {
  if (as) {
    return (
      <Popover.Trigger asChild>
        {cloneElement(as, {}, children)}
      </Popover.Trigger>
    );
  }
  return <Popover.Trigger>{children}</Popover.Trigger>;
}
