import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("타이틀 이름은 '카운터' 여야 한다.", () => {
    render(<App />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("카운터");
});
