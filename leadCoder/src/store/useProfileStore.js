import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProfileStore = create(
  persist(
    (set) => ({
      profile: {
        image: "", // base64 or image URL
        name: "username",
        address: "Earth",
        bio: "To get something you never had you have to do something you never did.",
        contact: "phone number",
        email: "example.com",
        programmingLanguage: "...",
        passion: "...",
      },

      // ✅ Update entire profile
      setProfile: (newProfile) =>
        set((state) => ({
          profile: { ...state.profile, ...newProfile },
        })),

      // ✅ Clear all data
      clearProfile: () =>
        set({
          profile: {
            image: "",
            name: "",
            address: "",
            bio: "",
            contact: "",
            email: "",
            programmingLanguage: "",
            passion: "",
          },
        }),
    }),
    {
      name: "user-profile", // localStorage key name
    }
  )
);
