import { create } from "zustand";
import api from "../../../services/api";

const useRequestNewMenu = create((set) => ({
    request: {
        weight: "",
        height: "",
        age: "",
        preference: "",
        restriction: "",
        goal: "",
        goalKgs: "",
        healthProblems: "",
        food: "",
    },
    loading: false,
    data: {},
    setRequestNewMenu: (attribute, value) => {
        set((state) => ({
            request: { ...state.request, [attribute]: value }
        }));
    },
    generateNewMenu: async (request) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/api/openai", request);
            console.log("response", data)
            set({ data: data.data || [] });
        } catch (error) {
            throw new Error(error.response?.data || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    }
}));

export default useRequestNewMenu;