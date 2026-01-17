let IS_PROD = true;
const server = IS_PROD ?
    "https://video-call-app-woad-chi.vercel.app/" :

    "http://localhost:8000"


export default server;