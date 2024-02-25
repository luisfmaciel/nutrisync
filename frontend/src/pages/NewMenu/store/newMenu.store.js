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
    requestSaveMenu: {},
    loading: false,
    data: {},
    menu: {},
    menuCreated: false,
    error: false,
    errorCreatedMenu: false,
    setRequestNewMenu: (attribute, value) => {
        set((state) => ({
            request: { ...state.request, [attribute]: value },
        }));
    },
    generateNewMenu: async (request) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/api/openai", request);
            set({ data: data.data || [] });
        } catch (error) {
            throw new Error(error.response?.data || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },
    setMenu: (obj) => {
        set((state) => ({
            menu: { ...state.menu, ...obj },
        }));
    },
    clearData: () => {
        set({ data: {}, menu: {} });
    },
    saveMenu: async (request) => {
        let response = {};
        try {
            set({
                loading: true,
                menuCreated: false,
                error: false,
                errorCreatedMenu: false,
            });
            const { data } = await api.post("/api/menu/create", request);
            response = data;
        } catch (error) {
            set({ error: true });
            throw new Error(error.response?.data || "Erro na requisição");
        } finally {
            setTimeout(() => {
                set((state) => ({
                    loading: false,
                    menuCreated: response.data?.success || false,
                    errorCreatedMenu: state.error
                }));
            }, 1000);
        }
    },
}));

export default useRequestNewMenu;
