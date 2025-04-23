async function handleSubmit(event){
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    const loginData = {userId, password};

    console.log("this is your data " +  loginData.userId +  "  " + loginData.password);

    const baseURL = "http://localhost:8082/loginUser"

    try{
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

  const data = await response.json();
  console.log(data);

  if(data){
    alert("Login Successfully");
  }
  else{
    alert("wrong credentials!");
  }

    }catch(error){
        alert("Error occurring while calling the API")
    }
}