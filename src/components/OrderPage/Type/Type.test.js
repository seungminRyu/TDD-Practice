const { render, screen } = require("@testing-library/react");
const { default: Type } = require(".");

test("Product 이미지가 렌더링 되어야한다.", async () => {
    render(<Type orderType="products" />);
    const productImgs = await screen.findAllByRole("img", {
        name: /product/i,
    });
    expect(productImgs).toHaveLength(2);
    const altTexts = productImgs.map((elem) => elem.alt);
    expect(altTexts).toEqual(["America product", "England product"]);
});
