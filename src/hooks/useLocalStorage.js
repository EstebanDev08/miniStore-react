import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(initialValue)
    

    useEffect(() => {

        const data = localStorage.getItem(key)

        if(!data){

            localStorage.setItem(key, JSON.stringify(initialValue))

        }else{
            setData(JSON.parse(data))
        }

    

    }, [])


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