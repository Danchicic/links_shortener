import os

from fastapi import APIRouter

from link_shortener.schemas import LinkSchema
from redis.asyncio import Redis

router = APIRouter(prefix='/links', tags=['Link Shortener'])
redis_instance: Redis = Redis(
    host=os.environ.get("REDIS_HOST"),
    port=os.environ.get("REDIS_PORT"),
    db=os.environ.get("REDIS_DB")
)


@router.get("/{id}")
async def get_link_by_id(id: str) -> str:
    return "mew"


@router.post("/")
async def create_link(link: LinkSchema) -> LinkSchema:
    pass
