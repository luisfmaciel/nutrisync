import { create } from "zustand";
import api from "../../../services/api";

const useRequestSignIn = create((set) => ({
    request: {
        email: "",
        password: "",
    },
    authorized: false,
    loading: false,
    data: {},
    setRequestSignIn: (newObj) => {
        set((state) => ({
            request: { ...state.request, ...newObj },
        }));
    },
    signIn: async (request) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/api/signin", request);
            console.log("response", data);
            set({ data: { ...data } || [], authorized: true });
            localStorage.setItem("token", data.data.token);
        } catch (error) {
            console.log(error.response?.data?.message || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },  
    getAccess: async (token) => {
        try {
            set({ loading: true });
            const { data } = await api.get("/api/signin/access", {
                headers: {
                    'Authorization': token,
                },
            });
            console.log("response teste", data);
            set({ data: { ...data } || [], authorized: data.auth });
            localStorage.setItem("userId", data.user._id);
        } catch (error) {
            console.log(error.response?.data?.message || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },
    signOut: async (token) => {
        try {
            set({ loading: true });
            console.log("token", token);
            const { data } = await api.get("/api/signin/logout", {
                headers: {
                    'Authorization': token,
                },
            });
            set({ authorized: data.auth });
            localStorage.removeItem('token')
        } catch (error) {
            console.log(error.response?.data?.message || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },
}));

export default useRequestSignIn;
