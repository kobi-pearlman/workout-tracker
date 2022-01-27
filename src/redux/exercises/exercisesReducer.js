import {exercisesActionTypes } from "./exercisesTypes";

const INITAL_STATE = {
    isLoading:false,
    isError:false,
    exercisesData:null
}

const exercisesReducer = (state=INITAL_STATE, action)=>{
    switch (action.type){
        case exercisesActionTypes.FETCH_EXERCISES_STATRTS:
            return {...state, isLoading:true};
            
            case exercisesActionTypes.FETCH_EXERCISES_SUCCESS:
                return {...state,isLoading:false,exercisesData:action.payload};

                case exercisesActionTypes.FETCH_EXERCISES_FAILURE:
                    return{...state,isLoading:false,isError:true};

                    default: return state

    };

}

export default exercisesReducer