import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "components/App";

test("앱 랜더링", () => {
    render(<App />);
});
