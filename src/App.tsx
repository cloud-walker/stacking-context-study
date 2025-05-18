import { PopoverIndicator, FloatingPanel, Portal } from "@ark-ui/react";
import {
  ArrowDownLeft,
  Maximize2,
  Minus,
  XIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";

import { styled } from "../styled-system/jsx";
import { Button } from "./modules/Button";
import {
  Popover,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./modules/Popover";
import { css, cx } from "../styled-system/css";
import { hstack } from "../styled-system/patterns";

export function App() {
  const [panels, setPanels] = useState<number[]>([0]);
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
        <PopoverRoot portal placement="right-start">
          <PopoverTrigger as={<Button />}>
            Click Me
            <PopoverIndicator>
              <ChevronRightIcon />
            </PopoverIndicator>
          </PopoverTrigger>
          <Popover>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Description</PopoverDescription>
          </Popover>
        </PopoverRoot>
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
        <Button
          onClick={() => {
            setPanels((prev) => {
              const nextId = (prev.at(-1) ?? -1) + 1;
              return [...prev, nextId];
            });
          }}
        >
          Button for main
        </Button>
        {panels.map((id) => {
          return (
            <FloatingPanel.Root key={id} open>
              <Portal>
                <FloatingPanel.Positioner
                  className={css({
                    "&:has([data-topmost])": {
                      zIndex: "10",
                    },
                  })}
                >
                  <FloatingPanel.Content
                    className={cx(
                      "group",
                      css({
                        bg: "slate.900",
                        padding: "3",
                        overflow: "auto",
                      })
                    )}
                  >
                    <FloatingPanel.DragTrigger>
                      <FloatingPanel.Header
                        className={hstack({
                          bg: "slate.700",
                          marginBlockStart: "-3",
                          marginInline: "-3",
                          padding: "3",
                          color: "slate.400",
                          ".group[data-topmost] &": {
                            color: "slate.50",
                          },
                        })}
                      >
                        <FloatingPanel.Title
                          className={css({ fontWeight: "medium" })}
                        >
                          Floating Panel {id}
                        </FloatingPanel.Title>
                        <FloatingPanel.Control
                          className={hstack({ marginInlineStart: "auto" })}
                        >
                          <FloatingPanel.StageTrigger stage="minimized">
                            <Minus />
                          </FloatingPanel.StageTrigger>
                          <FloatingPanel.StageTrigger stage="maximized">
                            <Maximize2 />
                          </FloatingPanel.StageTrigger>
                          <FloatingPanel.StageTrigger stage="default">
                            <ArrowDownLeft />
                          </FloatingPanel.StageTrigger>
                          <button
                            type="button"
                            onClick={() => {
                              setPanels((prev) =>
                                prev.filter((panelId) => panelId !== id)
                              );
                            }}
                          >
                            <XIcon />
                          </button>
                        </FloatingPanel.Control>
                      </FloatingPanel.Header>
                    </FloatingPanel.DragTrigger>
                    <FloatingPanel.Body>
                      <p
                        className={css({
                          color: "slate.400",
                        })}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores nesciunt sit itaque? Non unde fugiat
                        perspiciatis voluptatem consequuntur suscipit repellat
                        veniam, qui expedita adipisci fuga aut perferendis?
                        Iste, magnam itaque.
                      </p>
                    </FloatingPanel.Body>

                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "full",
                        bg: "slate.800",
                        top: "0",
                      })}
                      axis="n"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "full",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="e"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "full",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="w"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "full",
                        bg: "slate.800",
                      })}
                      axis="s"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="ne"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="se"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="sw"
                    />
                    <FloatingPanel.ResizeTrigger
                      className={css({
                        height: "0.5",
                        width: "0.5",
                        bg: "slate.800",
                      })}
                      axis="nw"
                    />
                  </FloatingPanel.Content>
                </FloatingPanel.Positioner>
              </Portal>
            </FloatingPanel.Root>
          );
        })}
      </styled.main>
    </styled.div>
  );
}
