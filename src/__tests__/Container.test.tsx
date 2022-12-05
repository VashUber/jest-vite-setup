import { getByText, render } from "@testing-library/react";
import { Container } from "../components/Container";

describe("Container", () => {
  it("Should render children props", () => {
    const msg = "Children component";
    const component = render(<Container>{msg}</Container>);

    expect(getByText(component.container, msg)).toBeInTheDocument();
  });
});
