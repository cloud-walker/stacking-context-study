import { styled } from "../../styled-system/jsx";
import { hstack } from "../../styled-system/patterns";

export function Button(props: React.ComponentPropsWithRef<"button">) {
  return (
    <styled.button
      type="button"
      {...props}
      css={hstack.raw({
        paddingBlock: "2",
        paddingInline: "4",
        borderRadius: "sm",
        borderColor: "slate.600",
        borderWidth: "1",
      })}
    />
  );
}
