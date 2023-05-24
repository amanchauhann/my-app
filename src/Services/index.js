export const LoginService = async (email, password) => {
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
    const ResStatus = res.status

    const data = await res.json()
    console.log("a", data)
    return { data, ResStatus };
    //if there is error, we are setting it in state.
    // if(ResStatus !== 200){
    //     setLoginError({status: ResStatus, message: data.errors[0]})
    // } 

    //if user exist, will get encodedToken
    //  const encodedToken = await data.encodedToken

    //  //store token in local storage, but only is user exist
    //  encodedToken && localStorage.setItem('encodedToken', encodedToken);
}

export const SignupService = async (email, password, name) => {
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
    const status = await res.status
    const data = await res.json()

    return ({ data, status })
}

export const wishlistService = async (auth_token, product) => {
    const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${auth_token}`
        },
        body: JSON.stringify({
            product
        })
    })
    // console.log("res", res.status)
    const status = await res.status
    const data = await res.json()
    const get_wishlist = await data.wishlist
    return { get_wishlist, status }
}

export const wishlistDeleteService = async (auth_token, product_id) => {
    const res = await fetch(`/api/user/wishlist/${product_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${auth_token}`
        }
    })
    // console.log("res", res.status)
    const status = await res.status
    const data = await res.json()
    const get_wishlist_deletion = await data.wishlist
    return { get_wishlist_deletion, status }
}

export const addToCartService = async (auth_token, product) => {
    const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${auth_token}`
        },
        body: JSON.stringify({
            product
        })
    })
    const status = await res.status
    const data = await res.json()
    const get_cart = await data.cart
    return { get_cart, status }
}