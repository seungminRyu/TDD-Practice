import { rest } from "msw";

const productsHandler = rest.get(
    "http://localhost:5000/products",
    (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "미국",
                    imagePath: "/images/america.jpeg",
                },
                {
                    name: "영국",
                    imagePath: "/images/england.jpeg",
                },
            ])
        );
    }
);

const optionsHandler = rest.get(
    "http://localhost:5000/options",
    (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "보험",
                },
                {
                    name: "식사",
                },
            ])
        );
    }
);

export const handlers = [productsHandler, optionsHandler];
