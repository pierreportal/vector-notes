#!/bin/bash

RESSOURCES_PATH=~/dev/@ressources
HACKS_PATH=~/dev/.@hacks
VECTORIZER_SCRIPT=~/dev/vectornotes/vectorizer/app.py

find $RESSOURCES_PATH $HACKS_PATH -type f -name "*.md" | python $VECTORIZER_SCRIPT 
