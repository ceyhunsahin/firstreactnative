function reducer (state,action) {
    switch (action.type) {
        case "increase" :
            state.counter = state.counter+1;
            return {...state};
        
        case "decrease" :
            state.counter = state.counter-1;
            return {...state};

        case "userName" :
            state.userName = action.x.NewUserName;
            return {...state};

        case "password" :
            state.password = action.x.NewPassword;
            return {...state};

        default :
        return state;
    }
}

export default reducer;