import axios from "axios";

const contactsAPI = axios.create({
    baseURL: "http://localhost:5001/api/",
});

export const registerUser = (username, email, password) => {
    return contactsAPI.post(`users/register`, {
        username: username,
        email: email,
        password: password
    }).then((response) => response);

};
export const loginUser = (email,password) => {

    return contactsAPI.post(`users/login`, {
        email: email,
        password: password
    }).then(({ data: { accessToken } }) => accessToken);

};
export const getCurrentUser = (accessToken) => {

    return contactsAPI.get(`users/current`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(({ data }) => {
        console.log(data);
        return data;
    });

};
export const getContacts = (accessToken) => {
    return contactsAPI.get(`contacts`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(({ data }) => {
        console.log(data);
        return data;
    });
};
export const insertContact = (accessToken,name, email, city,postalCode,phone) => {
    console.log("inserting contact", name, email, phone);
    return contactsAPI.post(`contacts/`,
        {
            name: name,
            email: email,
            city: city,
            postal:postalCode,
            phone: phone
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then(({data}) => data);

};
export const deleteContact = (accessToken,id) => {
    console.log("deleting contact");
    return contactsAPI.delete(`contacts/${id}`,
       {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then((res) => console.log(res));

};