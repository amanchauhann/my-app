export const LoginService = async (email, password)=>{
    // return 
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    })
     //storing status of Response.
     const ResStatus= res.status

     const data = await res.json()
console.log("a", data)
    return {data, ResStatus};
     //if there is error, we are setting it in state.
     // if(ResStatus !== 200){
     //     setLoginError({status: ResStatus, message: data.errors[0]})
     // } 

     //if user exist, will get encodedToken
    //  const encodedToken = await data.encodedToken

    //  //store token in local storage, but only is user exist
    //  encodedToken && localStorage.setItem('encodedToken', encodedToken);
}