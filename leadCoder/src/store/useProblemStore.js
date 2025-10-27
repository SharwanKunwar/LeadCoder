// store/useProblemStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProblemStore = create(
  persist(
    (set, get) => ({
      problems: [],

      // ✅ Initialize problems (only if empty)
      initializeProblems: (defaultProblems) => {
        const existing = get().problems;
        if (existing.length === 0) {
          const initialized = defaultProblems.map((p) => ({
            ...p,
            status: p.status || "pending",
          }));
          set({ problems: initialized });
        }
      },

      // ✅ Update problem (add if not exist)
      addOrUpdateProblem: (problem) =>
        set((state) => {
          const index = state.problems.findIndex((p) => p.id === problem.id);
          if (index !== -1) {
            const updated = [...state.problems];
            updated[index] = { ...updated[index], ...problem };
            return { problems: updated };
          }
          return { problems: [...state.problems, problem] };
        }),

      // ✅ Mark problem as completed
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
