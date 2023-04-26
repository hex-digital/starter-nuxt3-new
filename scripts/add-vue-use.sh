#!/bin/sh
set -e

echo 'Installing pinia into /src'

cd ../src

pnpm i -D @vueuse/nuxt

echo 'Complete'
