import React,{createContext} from "react";
const CreateContext = createContext({
    items : [],
    token : null,
    addToken : (tkn) => {},
    removeToken : () => {},
    reduceItems : () =>{}
})

export default CreateContext;