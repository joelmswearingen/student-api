import axios from 'axios' // this requires axios to be brought into this file

const base_url = '/api/students'

export default { // this export default line allows us to create functions to be use elsewhere via main.js

    getAllStudents() {
        return axios.get(base_url).then( response => {
            return response.data
        })
    },

    addStudent(student) {
        return axios.post(base_url, student).then( response => {
            return response.data
        })
    },

    updateStudent(student) {
        // /api/student/?
        return axios.patch(`${base_url}/${student.id}`, student).then( response => {
            return response.data
        })
    },

    deleteStudent(student) {
        return axios.delete(`${base_url}/${student.id}`, student).then( response => {
            return response.data
        })
    }

}