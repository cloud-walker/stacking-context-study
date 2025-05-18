import { Popover as P, Portal, usePopoverContext } from "@ark-ui/react";
import { css } from "../../../styled-system/css";
import { useRef } from "react";
import { raise } from "../raise";

export function Popover({ children }: { children: React.ReactNode }) {
  const ctx = usePopoverContext();
  const dropdownsContainer = useRef<HTMLElement>(
    document.querySelector("#dropdowns") ??
      raise("dropdowns container not found")
  );
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
    return <Portal container={dropdownsContainer}>{content}</Portal>;
  }
  return content;
}
