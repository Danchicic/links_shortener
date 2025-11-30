import logging

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from link_shortener.routes import router as main_router

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
app = FastAPI()
app.include_router(main_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],


)
@app.get("/liveness")
async def liveness():
    return {"status": "active!"}
