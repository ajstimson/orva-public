# ORVA - ORVA Public Project Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-typescript-app`](https://www.npmjs.com/package/create-next-typescript-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Build Docker Image

```sh
docker build -t orva:0.\d --build-arg PROFILE=prd|stg .

# for example stg and version 0.2
docker build -t orva:0.2 --build-arg PROFILE=stg .

# or prd and version 0.51
docker build -t orva:0.51 --build-arg PROFILE=prd .
```

## Useful Recipes

### Inspect built docker image

To inspect a docker image you've built and see the contents of it. We can connect to it via a terminal.

```sh
docker run --rm -it --entrypoint bash <image-name-or-id>

# For example given docker build output:

Step 17/17 : CMD ["yarn", "start"]
 ---> Using cache
 ---> 3fc86a633255
Successfully built 3fc86a633255

# We would run

docker run --rm -it --entrypoint /bin/sh 3fc86a633255

# if you already have an image with a name and version, you can also use that instead
docker run --rm -it --entrypoint /bin/sh orva:0.71
```

What this does is run the docker image in a disposable container (`--rm`) and opens an interactive terminal `-it` with the entrypoint `/bin/sh`.

If you want to leave the terminal and dispose of the environment. We exit the terminal:

```sh
exit
```