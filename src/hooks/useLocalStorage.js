import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(initialValue)
    

    useEffect(() => {

        const data = localStorage.getItem(key)

        !data 
        ? localStorage.setItem(key, initialValue)
        : setItems(JSON.parse(data))



    }, [key, initialValue])


    const saveData = (newData) => {
        
        const stringifyData = JSON.stringify(newData)
        localStorage.setItem(key, stringifyData)
        setData(newData)
        

    }

    return {
        data,
        saveData
    }

}


export {useLocalStorage}