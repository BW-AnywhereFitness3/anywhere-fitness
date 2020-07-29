  
import { 
    ADD_CLASS_START,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAIL
} from '../actions/addClass';

const initalState = {
    classes: [],
    error: '',
    isFetching: false,
    success_message: ''
};

export const addClassReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_CLASS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case ADD_CLASS_SUCCESS:
            return {
                ...state,
                stories: [
                    ...state.stories,
                    action.payload
                ],
                isFetching: false,
                error: '',
                success_message: 'Story added! You can add another story now, or click the close button'
            };
        case ADD_CLASS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}