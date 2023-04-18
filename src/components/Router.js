import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "../routes/Counter";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

function AppRouter(props) {
    return (
        <>
            <h1>TDD Practice</h1>
            <Navigation />
            <Routes>
                <Route index element={<Counter />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default AppRouter;
