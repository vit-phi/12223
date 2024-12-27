import axios from 'axios'


export const createCategory = async (token, form) => {
    // code body
    return axios.post('ttps://idontcutmyhair.vercel.app/api/category', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listCategory = async () => {
    // code body
    return axios.get('ttps://idontcutmyhair.vercel.app/api/category')
}

export const removeCategory = async (token, id) => {
    // code body
    return axios.delete('ttps://idontcutmyhair.vercel.app/api/category/'+id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}