import { useState } from "react";

function SummaryPage() {
    const [checked, setChecked] = useState(false);

    const onChange = (e) => setChecked(e.target.checked);

    return (
        <div>
            <form>
                <input
                    type="checkbox"
                    id="confirm-checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor="confirm-checkbox">
                    주문하려는 것을 확인하셨나요?
                </label>
                <br />
                <button type="submit" disabled={!checked}>
                    주문 확인
                </button>
            </form>
        </div>
    );
}

export default SummaryPage;
