import request from "@/utils/request";

interface returnData {
    status: number,
    message: string
}
export const uploadImage = (item: FormData) => request.post<returnData, any>("upload-image", item, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
export const uploadWord = (item: FormData) => request.post<returnData, any>("upload-word", item, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})