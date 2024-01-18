import { useState } from "react"
import { Column } from "./types"

const Test = () => {

    const [columns , setColumns] = useState<Column[]>([]);
    console.log(columns)
    const createNewColumn = () =>{
        const columnToAdd : Column  = {
            id:generateId(),
            title:`Column ${columns.length + 1}`
        }

        setColumns([...columns,columnToAdd])
    }

    return (
        <div>
            <button onClick={createNewColumn}>Button</button>
            {columns.map(i=>{
                return <div>{i.title}</div>
            })}
        </div>
    )

}

const generateId = () =>{ 
    return Math.floor(Math.random() * 10001)
}



export default Test
