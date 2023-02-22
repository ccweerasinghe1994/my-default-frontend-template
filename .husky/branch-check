#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "this hook is running 🔥🔥🔥🔥🔥🔥" 

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" = "development" ]; then
  echo "You are not allowed to commit changes directly to the development branch"
  exit 1
fi