import { create } from "zustand";
import api from "../../../services/api";

const useMyMenu = create((set) => ({
    loading: false,
    render: false,
    data: [],
    classification: undefined,
    setDataMenu: (data) => {
        set({ data });
    },
    setClassificationMenu: async (_id, classification) => {
        try {
            set({ loading: true });
            const { data } = await api.put("/api/menu/updateClassification", {
                _id,
                classification,
            });
            set({ data: data.data.menus, classification: data.data.classification || 0 });
        } catch (error) {
            throw new Error(error.response?.data || "Erro na requisição");
        } finally {
            setTimeout(() => {
                set({ loading: false });
            }, 500);
        }
    },
    getMenuByCategory: async (params) => {
        try {
            set({ loading: true });
            const { data } = await api.get("/api/menu", { params });
            console.log('datateste', data);
            set({ data: data.data.menus || [], render: true });
        } catch (error) {
            throw new Error(error.response?.data || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },

    // saveMenu: async (request) => {
    //     let response = {};
    //     try {
    //         set({
    //             loading: true,
    //             menuCreated: false,
    //             error: false,
    //             errorCreatedMenu: false,
    //         });
    //         const { data } = await api.post("/api/menu/create", request);
    //         response = data;
    //     } catch (error) {
    //         set({ error: true });
    //         throw new Error(error.response?.data || "Erro na requisição");
    //     } finally {
    //         setTimeout(() => {
    //             set((state) => ({
    //                 loading: false,
    //                 menuCreated: response.data?.success || false,
    //                 errorCreatedMenu: state.error
    //             }));
    //         }, 1000);
    //     }
    // },
}));

export default useMyMenu;
