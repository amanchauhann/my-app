import { toast } from "react-toastify";

export const successToast = (success_text) => {
    return (
        toast.success(`${success_text}`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}