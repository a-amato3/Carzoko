# Carzoko Site

## Instructions

When creating a branch to work on a task, name it as `CARZ-<TASK NUMBER>` e.g. `CARZ-1`.

## Running the project

```bash
yarn install

yarn dev
```

## Docker

To build the project into a docker image:

```bash
# Builds the image
docker build -t <name of image> .

# Runs a container from that image
docker run -it -dp 3000:3000 --name <name of container> <name of image>
```
