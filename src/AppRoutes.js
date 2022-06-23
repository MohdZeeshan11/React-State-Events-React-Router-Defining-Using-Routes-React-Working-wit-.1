import React from "react";
import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Index />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  );
};
