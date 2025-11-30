class _LinksApi {
    constructor() {
        this.host = "http://localhost:8080"

    }

    async getShortLink(longLink) {

    }

    async getLongLink(shortLink) {
        const resp = await fetch(`${this.host}/links/${shortLink}`)
        if (resp.status === 200) {
            return await resp.json();
        } else {
            return null;
        }
    }
}

const LinksApi = new _LinksApi();
export default LinksApi;