FROM python:3.13.1-slim

RUN pip install uv

WORKDIR /app

# Копируем только конфигурацию зависимостей
COPY pyproject.toml uv.lock /app/

# Ставим зависимости
RUN uv sync --frozen

# Потом копируем код
COPY link_shortener /app/link_shortener

CMD ["uv", "run", "uvicorn", "link_shortener.application:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]