import logging

from fastapi import FastAPI

from link_shortener.routes import router as main_router

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
app = FastAPI()
app.include_router(main_router)


@app.get("/liveness")
async def liveness():
    return {"status": "active!"}
