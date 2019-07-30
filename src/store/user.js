import firebase from 'firebase'


export default {
    state: {
        user: {
            isAuthenticated: false,
            userId: null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthenticated = true
            state.user.userId = payload
        },
        UNSET_USER(state) {
            state.user.isAuthenticated = false
            state.user.userId = null
        }
    },
    actions: {
        signin( {commit}, payload ) {
            commit('CLEAR_ERROR')
            commit('SET_PROCESSING', true)
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('SET_PROCESSING', false)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)
                })
        },
        logout({commit}) {
            firebase.auth().signOut()
        },
        STATE_CHANGED({commit}, payload) {
            if(payload){
                commit('SET_USER', payload.uid)
            }else{
                commit('UNSET_USER')
            }
        }

    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
}
