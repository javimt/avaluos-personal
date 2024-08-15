
import { useEffect, useState } from "react";


export default function useEmailHook() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        consulta: '',
        phoneNumber:''
    })
    useEffect(()=>{
        console.log(form)
    }, [form])

    function createFormData() {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('consulta', form.consulta);
        formData.append('phoneNumber', form.phoneNumber);
        return formData
    }

    function handleForm (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
        console.log(e)
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    function sendEmail(e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        
        const formData = createFormData()
        console.log(formData.get('consulta'))

        fetch('https://formsubmit.co/branovecar@gmail.com',{
            body: formData,
            method: 'POST',
        })
        .then(() => console.log('procesado'))
        .catch(err => console.log(err))
     
    }

    return {
        form,
        sendEmail,
        handleForm
    };

}
