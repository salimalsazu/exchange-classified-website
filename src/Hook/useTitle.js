import { useEffect } from "react";

//Dynamic title 

const useTitle = (title) => {

    useEffect(() => {

        document.title = `${title} - exchange.com`

    }, [title])

};

export default useTitle;