import React,{createContext} from "react";
const CreateContext = createContext({
    items : [],
    reduceItems : () =>{}
})

export default CreateContext;