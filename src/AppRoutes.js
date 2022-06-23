import React from "react";
import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Index />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  );
};
