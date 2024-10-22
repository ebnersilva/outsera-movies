import { toast } from "react-toastify"

export const showInfoToast = (message: string) => {
    toast.info(message)
}

export const showErrorToast = (message: string) => {
    toast.error(message)
}

export const showSuccessToast = (message: string) => {
    toast.success(message)
}