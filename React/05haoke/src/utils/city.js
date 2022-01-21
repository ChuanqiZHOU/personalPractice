const TOKEN_NAME = 'hkzf_city'

//get current city
const getCity = () => JSON.parse(localStorage.getItem(TOKEN_NAME))

//set current city
const setCity = value => localStorage.setItem(TOKEN_NAME, value)

export {getCity, setCity}