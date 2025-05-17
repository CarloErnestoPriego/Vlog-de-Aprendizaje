import axios from 'axios'

const commentService = axios.create({
    baseURL: 'http://127.0.0.1/gestorOpiniones/v1/',
    timeout: 5000
});

export const postComment = async(idPost, commentData) => {
    try {
        const response = await commentService.post(`comments/${idPost}`, commentData)
        return response.data.comment
    } catch (error) {
        console.log('error al crear comentario: ', error);
        throw error
    }
}

export const getComment = async() => {
    try {
        const response = await commentService.get('comments/')
        return response.data
    }catch (error) {
        console.log('error al obtener comentarios: ', error);
        throw error
    }
}

export const updateComment = async (id, commentData) => {
    try {
        const response = await commentService.put(`comment/${id}`, commentData)
        return response.data;
    } catch (error) {
        console.log('Error al actualizar commentario: ', error);
        throw error
    }
}

export const deleteComment = async (id) => {
    try {
        const response = await commentService.delete(`comments/${id}`)
        return response.data;
    } catch (error) {
        console.log('Error al eliminar comentario: ', error);
        throw error
    }
}