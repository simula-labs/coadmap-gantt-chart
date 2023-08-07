#!/bin/bash

cat package.json | jq ".version|=\"$1\"" > package.json~
mv package.json~ package.json
