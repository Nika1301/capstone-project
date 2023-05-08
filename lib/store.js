import { create } from "zustand";
import { createCitySlice } from "./slices/createCitySlice";
export const useAppStore = create()((...a) => ({
  ...createCitySlice(...a),
}));
