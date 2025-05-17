import { styled } from "../styled-system/jsx";
import { css } from "../styled-system/css";
import { Popover, Portal } from "@ark-ui/react";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./modules/Button";

export function App() {
  return (
    <styled.div
      css={{
        height: "svh",

        display: "grid",
        gridTemplateColumns: "auto 1fr",
        isolation: "isolate",
        position: "relative",
        padding: "4",
        zIndex: "revert-layer",
      }}
    >
      <styled.aside
        css={{ borderWidth: "1", borderColor: "slate.600", padding: "4" }}
      >
        <Popover.Root portalled positioning={{ placement: "right-start" }}>
          <Popover.Trigger asChild>
            <Button>
              Click Me
              <Popover.Indicator>
                <ChevronRightIcon />
              </Popover.Indicator>
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                className={css({
                  borderWidth: "1",
                  borderColor: "slate.600",

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
          borderWidth: "1",
          borderColor: "slate.600",
          padding: "4",
        }}
      >
        <Button>Button for main</Button>
      </styled.main>
    </styled.div>
  );
}
