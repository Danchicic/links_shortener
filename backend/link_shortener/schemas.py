from pydantic import BaseModel


class LinkSchema(BaseModel):
    link: str
