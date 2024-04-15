FROM node:20-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN apk update && apk add git 
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=development
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \ 
  pnpm config set store-dir /pnpm/store && \
  pnpm config set package-import-method copy && \
  pnpm install --prefer-offline --ignore-scripts
COPY . .
CMD pnpm run dev