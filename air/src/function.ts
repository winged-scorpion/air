import axios from "axios";

export async function sendForm(formData:Object) {
    const {data} = await axios.post('/', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
