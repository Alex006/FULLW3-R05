import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerAsync = createAsyncThunk(
    "auth/registerAsync",
    async (data) => {
        try {
            const response = await fetch("http://localhost:8500/register", {
                method: "POST", // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const responseJson = await response.json();
            console.log(responseJson);
            localStorage.setItem('app_token', responseJson.person_token);
            return {
                isAuth: true,
                email: responseJson.email,
                token: responseJson.person_token
            };
        } catch (error) {
            console.log(error);
            localStorage.removeItem('app_token');
            return { email: null, isAuth: false, token: null };
        }
    }
);
export const loginAsync = createAsyncThunk(
    "auth/loginAsync",
    async (data) => {
        try {
            const response = await fetch("http://localhost:8500/login", {
                method: "POST", // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const responseJson = await response.json();
            console.log(responseJson);
            localStorage.setItem('app_token', responseJson.person_token);
            return {
                isAuth: true,
                email: responseJson.email,
                token: responseJson.person_token
            };
        } catch (error) {
            console.log(error);
            localStorage.removeItem('app_token');
            return { email: null, isAuth: false, token: null };
        }
    }
);
const token = localStorage.getItem("app_token");

const initialState = {
    isAuth: false,
    email: null,
    token: token ? token : null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logOut: (state, action) => {
            localStorage.removeItem('app_token');
            state.isAuth = false;
            state.email = null;
            state.token = null;
        },
    },
    extraReducers: {
        [registerAsync.fulfilled]: (state, action) => {
            const { isAuth, email, token } = action.payload;
            state.isAuth = isAuth;
            state.email = email;
            state.token = token;
        },
        [loginAsync.fulfilled]: (state, action) => {
            const { isAuth, email, token } = action.payload;
            state.isAuth = isAuth;
            state.email = email;
            state.token = token;
        },
    },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
