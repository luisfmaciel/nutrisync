import { create } from "zustand";
import api from "../../../services/api";

const useRequestSignUp = create((set) => ({
    request: {
        name: "",
        email: "",
        password: "",
    },
    authorized: false,
    loading: false,
    data: {},
    setRequestSignUp: (newObj) => {
        set((state) => ({
            request: { ...state.request, ...newObj },
        }));
    },
    signUp: async (request) => {
        try {
            set({ loading: true });
            const { data } = await api.post("/api/register", request);
            console.log("response", data);
            set({ data: { ...data, sucess: true } || [], authorized: true });
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userId", data.user._id);
        } catch (error) {
            console.log(error.response?.data?.message || "Erro na requisição");
        } finally {
            set({ loading: false });
        }
    },
    // getAccess: async (token) => {
    //     try {
    //         set({ loading: true });
    //         console.log("data.token", token);
    //         const { data } = await api.get("/api/signin/access", {
    //             headers: {
    //                 'Authorization': token,
    //             },
    //         });
    //         console.log("response", data);
    //         set({ authorized: data.auth });
    //     } catch (error) {
    //         console.log(error.response?.data?.message || "Erro na requisição");
    //     } finally {
    //         set({ loading: false });
    //     }
    // },
    // signOut: async (token) => {
    //     try {
    //         set({ loading: true });
    //         console.log("token", token);
    //         const { data } = await api.get("/api/signin/logout", {
    //             headers: {
    //                 'Authorization': token,
    //             },
    //         });
    //         set({ authorized: data.auth });
    //         localStorage.removeItem('token')
    //     } catch (error) {
    //         console.log(error.response?.data?.message || "Erro na requisição");
    //     } finally {
    //         set({ loading: false });
    //     }
    // },
}));

export default useRequestSignUp;
