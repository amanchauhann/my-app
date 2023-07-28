export const LoginService = async (email, password) => {
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
    const ResStatus = res.status
    const data = await res.json()
    return { data, ResStatus };
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

export const cartDeleteService = async (auth_token, product_id) => {
    const res = await fetch(`/api/user/cart/${product_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${auth_token}`
        }
    })
    const status = await res.status
    const data = await res.json()
    const get_cart_deletion = await data.cart
    return { get_cart_deletion, status }
}