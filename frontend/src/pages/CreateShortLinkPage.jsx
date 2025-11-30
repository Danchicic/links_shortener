import React, {useState} from 'react';
import LinksApi from "../api/LinksApi.js";

const CreateShortLinkPage = () => {
    const [longLink, setLongLink] = useState("");       // пользовательский input
    const [shortLink, setShortLink] = useState("");     // результат запроса
    const [loading, setLoading] = useState(false);      // состояние загрузки
    const [error, setError] = useState("");             // ошибка запроса
    const [loaded, setLoaded] = useState(false);

    const handleCreate = async () => {
        if (!longLink) return;
        setLoading(true);
        setError("");
        try {
            const result = await LinksApi.getShortLink(longLink);
            const shortLink = result['link']
            setShortLink(shortLink); // предполагается, что API возвращает короткую ссылку
            navigator.clipboard.writeText(shortLink);
            setLoaded(true);
        } catch (err) {
            setError("Failed to create short link");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div style={{maxWidth: "100%", margin: "50px auto", textAlign: "center"}}>
            <h2>Create your short link</h2>

            <div style={{display: "flex", alignItems: "center", marginTop: "20px", gap: "10px"}}>
                {/* Input длинной ссылки */}
                <input
                    type="text"
                    placeholder="Input your long link"
                    value={longLink}
                    onChange={(e) => setLongLink(e.target.value)}
                    style={{flex: 1, padding: "10px", fontSize: "16px"}}
                />

                {/* Стрелка */}
                <span style={{fontSize: "24px"}}>→</span>

                {/* Результат */}
                <input
                    type="text"
                    value={shortLink}
                    readOnly
                    placeholder="Short link"
                    style={{
                        flex: 1,
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: loaded ? "#fff" : "#e0e0e0",
                        color: loaded ? "#000" : "#888",
                        border: "1px solid #ccc",
                        pointerEvents: loaded ? "auto" : "none"
                    }}
                />
            </div>
            {loaded && <p style={{color: "green", marginTop: "10px"}}>Ссылка скопирована!</p>}

            {/* Ошибка */}
            {error && <p style={{color: "red", marginTop: "10px"}}>{error}</p>}

            {/* Кнопка Create */}
            <button
                onClick={handleCreate}
                disabled={loading || !longLink}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: loading || !longLink ? "not-allowed" : "pointer",
                }}
            >
                {loading ? "Creating..." : "Create"}
            </button>
        </div>
    );
};

export default CreateShortLinkPage;


