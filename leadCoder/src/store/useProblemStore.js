// store/useProblemStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProblemStore = create(
  persist(
    (set, get) => ({
      problems: [],

      // Initialize problems (only if empty)
      initializeProblems: (defaultProblems) => {
        const existing = get().problems;
        const updatedList = [...existing];

        defaultProblems.forEach((p) => {
          const exists = existing.some((e) => e.id === p.id);
          if (!exists) {
            updatedList.push({ ...p, status: p.status || "pending", code: "" });
          }
        });

        set({ problems: updatedList });
      },

      // Add or update problem (including code)
      addOrUpdateProblem: (problem) =>
        set((state) => {
          const index = state.problems.findIndex((p) => p.id === problem.id);
          if (index !== -1) {
            const updated = [...state.problems];
            updated[index] = { ...updated[index], ...problem };
            return { problems: updated };
          }
          return { problems: [...state.problems, { ...problem, code: "" }] };
        }),

      // Save code for a problem
      saveCode: (id, code) =>
        set((state) => {
          const updated = state.problems.map((p) =>
            p.id === id ? { ...p, code } : p
          );
          return { problems: updated };
        }),

      // Mark problem as completed
      markCompleted: (id) =>
        set((state) => {
          const updated = state.problems.map((p) =>
            p.id === id ? { ...p, status: "completed" } : p
          );
          return { problems: updated };
        }),

      getProblemById: (id) => get().problems.find((p) => p.id === id),
    }),
    {
      name: "problemData",
    }
  )
);
