async function handleSubmit(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const password = document.getElementById("password").value;

    const registerData = {email, name, password, phone};


    const baseURL = "http://localhost:8082/addUser"

    try{
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

 if(response.ok){
    alert("registeration successfully done");
 }
    }catch(error){
        alert("Error occurring while calling the API")
    }
}