import { useEffect } from "react"
const useTitle = title => {
    useEffect(() => {
        document.title = `certificate-verify/${title}`
    }, [title])
}
export default useTitle;