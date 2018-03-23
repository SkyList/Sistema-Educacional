import axios from 'axios'

//URL BASE DE CONEXÃO
const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const loadPerguntas = () => api.get('perguntas')
export const saveQuestionario = (newQuestionario) => api.post('perguntas', newQuestionario)


export default {
    loadPerguntas: loadPerguntas,
    saveQuestionario: saveQuestionario
}