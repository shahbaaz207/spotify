// where all the logic is happend here
export const initialState={
    user:null,
    playlists:[],
    item:null,
    // token:'BQCGKi5P8vYpjKxa_gEPr1b3zlGQ5VEj4cEfjUcvYEQROLSsq-_8bYljOmOvc7LtAi4LGTi8_7ZNISJCIZKoGwTt_j7LokmS2aL17ayRgnSKdGaP0WzkVpSoLN1hC5IG0gNmMEaI7sBu6tSGwsCzxSvUQPwLoKd_YBCQAkQChedTrbsEqsMy',
    playing:false
}

const reducer=(state,action)=>{
    console.log(action)
    
    // action->type,payload
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
            case "SET_TOKEN":
                return{
                    ...state,
                    token:action.token
                }

            case "SET_PLAYLIST":
                return{
                    ...state,
                    playlists:action.playlists
                } 
                
                case "SET_WEEKLY":
                return{
                    ...state,
                    discover_weekly:action.discover_weekly
                } 
            default:
                return state
    }
}
export default reducer