import axios from "axios"

const baseUrl = "http://localhost:5000/api/phonebooks"

/**
 * 
 * @returns all Data
 */
const getAll = () => axios.get(baseUrl)

/**
 * 
 * @param newData 
 * @returns 
 */
const createNew = (newData: {name: string, number: string}) => axios.post(baseUrl, newData).catch

/**
 * 
 * @param id 
 * @param changedNote 
 * @returns 
 */
const update = (id: string, changedNote: {name?: string, number?: string}) => axios.put(`baseUrl/${id}`, changedNote)

const deleteData = (name: string) => axios.delete(`baseUrl/${name}`)


export {
    getAll,
    createNew,
    update,
    deleteData
}
