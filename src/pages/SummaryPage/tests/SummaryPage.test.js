const { render, screen } = require("@testing-library/react");
const { default: SummaryPage } = require("../SummaryPage");

test("주문확인 체크가 없으면 '주문확인' 버튼은 비활성화 되어야한다.", () => {
    render(<SummaryPage />);

    const checkBox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    });
    expect(checkBox.checked).toBeFalsy();

    const confirmBtn = screen.getByRole("button", {
        name: "주문 확인",
    });
    expect(confirmBtn.disabled).toBeTruthy();
});
