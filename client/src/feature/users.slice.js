import { configureStore, createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name :  "users",
    initialState : {
        users : null
    },
    reducers : {
        setUsers : (state, action) => {
            const users = action.payload
            state.users = users
        }
    },

})

export const livresSlice = createSlice({
         name: "livres",
         initialState: {
           livres: [
             {
               nom: "Le premier jour",
               categorie: ["roman", "drame", "aventure"],
               Description:
                 "Adrian est astrophysicien, Keira, archéologue. Lui s'interroge sur l'origine du monde ; elle, sur l'origine de l'homme. Quand leurs chemins se croisent, le mystérieux objet que Keira porte au cou - une pierre étrange découverte dans le cratère d'un volcan éteint - va les entrainer dans une aventure sans pareille. La quête d'une découverte majeure les mènera, en dépit des obstacles accumulés sur leur route, de laboratoires en musées, de sites astronomiques en terrains de fouilles. Ils comprendront alors qu'une même question les hante : « Comment tout a commencé ? »",
               Auteur: "Marc Levy",
               photo: "https://picsum.photos/400/369",
             },
           ],
         },
         reducers: {
           setLivres: (state, action) => {
             const livres = action.payload;
             state.livres = livres;
           },
         },
       });

export const tokenSlice = createSlice({
    name : "token",
    initialState : {
        token : null
    },
    reducers : {
        setToken : (state, action) => {
            const token = action.payload
            state.token = token
        }
    }
})


const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        livres: livresSlice.reducer,
        token: tokenSlice.reducer
    }
})

export default store;