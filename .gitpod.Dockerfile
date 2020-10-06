FROM marpteam/marp-cli

USER root

RUN apt-get update && apt-get install libgbm-dev
