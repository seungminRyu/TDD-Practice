import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./components/App";

test("타이틀 이름은 '카운터' 여야 한다.", () => {
    render(<App />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("카운터");
});

test("시작값은 0 이여야 한다.", () => {
    render(<App />);
    const value = screen.getByTestId("value");
    expect(value).toHaveTextContent("0");
});

test("+를 클릭하면 값이 1 증가한다.", () => {
    render(<App />);
    const plusBtn = screen.getByTestId("plus-btn");
    const value = screen.getByTestId("value");
    fireEvent.click(plusBtn);
    expect(value).toHaveTextContent("1");
});

test("-를 클릭하면 값이 1 감소한다.", () => {
    render(<App />);
    const minusBtn = screen.getByTestId("minus-btn");
    const value = screen.getByTestId("value");
    fireEvent.click(minusBtn);
    expect(value).toHaveTextContent("-1");
});
