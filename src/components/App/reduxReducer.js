import { FaCreativeCommonsPd } from "react-icons/fa"

const initialState = {
    imageData: [],
    imageCount: 0,
    afterKey: null
}

export default (prevState = initialState, { type, payload }) => {
    switch (type) {
        case "IMAGE_COUNT_INCREASED":
            return { ...prevState, imageCount: prevState.imageCount + payload }
        case "IMAGE_DATA_LOADED":
            return { ...prevState, imageData: payload }
        default:
            return { ...prevState }
    }
}
