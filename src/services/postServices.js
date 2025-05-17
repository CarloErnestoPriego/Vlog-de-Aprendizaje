import axios from "axios";

const postService = axios.create({
    baseURL: 'http://127.0.0.1:3000/gestorOpiniones/v1/',
    timeout: 5000
});

export const savePost = async(postData) => {
    try {
        const response = await postService.post('posts/', postData);
        return response.data.post;
    } catch (error) {
        console.log('error al realizar una publicacion', error);
        throw error
    }
}

export const getPost = async () => {
    try {
        const response = await postService.get('posts/');
        return response.data;
    } catch (error) {
        console.log('no se pudo obtener las publicaciones', error);
        throw error
    }
}

export const updatePost = async (id, postData) => {
    try {
        const response = await axios.put(`posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.log('Error al actualizar la publicacion', error);
        throw error
    }
}

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error al eliminar la publicacion', error);
        throw error
    }
}