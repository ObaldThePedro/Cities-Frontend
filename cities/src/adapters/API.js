const endpoint = 'http://localhost:3000/api'
const signupUrl = `${endpoint}/users`
const loginUrl = `${endpoint}/login`
const postsUrl = `${endpoint}/posts`
const validateUrl = `${endpoint}/validate`

const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        return Promise.resolve({error: 'no token'})
}

const signUp = (user) => fetch(signupUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(data => {
        localStorage.setItem('token', data.token)
        return data.user
    })
    .catch(handleServerError)


const logIn = (user) => fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify).then(data => {
    localStorage.setItem('token', data.token)
    return data.user
})

const handleServerError = response => console.error(response)


const validateUser = () => {
    if(!localStorage.getItem('token')) return Promise.resolve({error: 'no token'})

    return fetch(validateUrl, {
        headers: {'Authorization': localStorage.getItem('token')}
    }).then(resp => resp.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            return data
        })
        .catch(handleServerError)
}

const clearToken = () => localStorage.removeItem('token')


export default {
    signUp,
    logIn,
    validateUser,
    clearToken
}