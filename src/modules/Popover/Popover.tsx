import { Popover as P, Portal, usePopoverContext } from "@ark-ui/react";
import { css } from "../../../styled-system/css";

export function Popover({ children }: { children: React.ReactNode }) {
  const ctx = usePopoverContext();
  const content = (
    <P.Positioner>
      <P.Content
        className={css({
          borderWidth: "1",
          borderColor: "slate.600",

          width: "60",
          bg: "slate.900",
        })}
      >
        {children}
      </P.Content>
    </P.Positioner>
  );

  if (ctx.portalled) {
    return <Portal>{content}</Portal>;
  }
  return content;
}
