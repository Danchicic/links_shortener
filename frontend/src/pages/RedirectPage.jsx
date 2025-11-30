import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import LinksApi from "../api/LinksApi.js";

const RedirectPage = () => {
    const params = useParams();
    const link = params.id;
    const [timer, setTimer] = useState(4);
    const [longLink, setLongLink] = useState(null)
    const [error, setError] = useState();

    useEffect(() => {
        async function setLongLinkFromApi() {
            const longLinkFromApi = await LinksApi.getLongLink(link);
            setLongLink(longLinkFromApi['link'])
        }

        setLongLinkFromApi();
    }, [])

    useEffect(() => {
        if (timer < 1) {
            console.log(longLink)
            if (longLink) {
                window.location.replace(longLink);
            } else {
                setError("Some error while link receiving")
            }
        } else {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(interval)

        }
    }, [timer])
    return (
        <div>
            <h1>Осталось {timer} секунд до перехода!</h1>
            {error && <h5> Ошибка: {error} </h5>}
        </div>
    );
};

export default RedirectPage;