import { styled } from "../styled-system/jsx";
import { css } from "../styled-system/css";
import { hstack } from "../styled-system/patterns";
import { Popover, Portal } from "@ark-ui/react";
import { ChevronRightIcon } from "lucide-react";

export function App() {
  return (
    <styled.div
      css={{
        height: "svh",

        display: "grid",
        gridTemplateColumns: "auto 1fr",
        isolation: "isolate",
        position: "relative",
      }}
    >
      <styled.aside css={{ border: "[1px solid]" }}>
        <Popover.Root portalled>
          <Popover.Trigger className={hstack()}>
            Click Me
            <Popover.Indicator>
              <ChevronRightIcon />
            </Popover.Indicator>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                className={css({
                  border: "[1px solid]",
                  width: "60",
                  bg: "slate.900",
                })}
              >
                <Popover.Title>Title</Popover.Title>
                <Popover.Description>Description</Popover.Description>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </styled.aside>
      <styled.main
        css={{
          bg: "slate.950",
          position: "relative",
        }}
      >
        main
      </styled.main>
    </styled.div>
  );
}
