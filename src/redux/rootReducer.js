import { combineReducers } from 'redux'
import pythonReducer from './Python/pythonReducer'
import javaReducer from './Java/javaReducer'
import cSharpReducer from './C#/c#Reducer'
import javascriptReducer from './Javascript/javascriptReducer'

const rootReducer = combineReducers({
    python: pythonReducer,
    java: javaReducer,
    csharp: cSharpReducer,
    javascript: javascriptReducer,
})

export default rootReducer 
