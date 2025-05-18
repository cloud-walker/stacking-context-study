import { ChevronRightIcon } from "lucide-react";

import { styled } from "../styled-system/jsx";
import { Button } from "./modules/Button";
import {
  Popover,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./modules/Popover";
import { PopoverIndicator } from "@ark-ui/react";

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
        <PopoverRoot portal>
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
        <Button>Button for main</Button>
      </styled.main>
    </styled.div>
  );
}
