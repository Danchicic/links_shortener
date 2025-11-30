import logging
import os
import uuid

from fastapi import APIRouter, HTTPException
from redis.asyncio import Redis

from link_shortener.response_schemas import LinkSchemaResponse
from link_shortener.schemas import LinkSchema

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/links', tags=['Link Shortener'])
redis_instance: Redis = Redis(
    host=os.environ.get("REDIS_HOST"),
    port=os.environ.get("REDIS_PORT"),
    db=os.environ.get("REDIS_DB")
)


@router.get("/{id}")
async def get_link_by_id(id: str) -> LinkSchema:
    if long_link := await redis_instance.get(id):
        return LinkSchemaResponse(link=long_link)
    raise HTTPException(status_code=404, detail="Link not found")


@router.post("/")
async def create_link(link: LinkSchema) -> LinkSchema:
    link_string = link.link
    uuid_string = str(uuid.uuid4())
    try:
        await redis_instance.set(
            uuid_string,
            link_string,
            ex=24 * 60 * 60,  # 24 hours
        )
        return LinkSchemaResponse(link=f"http://localhost/links/{uuid_string}")

    except Exception:
        logger.exception("Failed to create link")
        raise HTTPException(status_code=400, detail="Failed to create link")
