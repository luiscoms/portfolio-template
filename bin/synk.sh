#!/bin/sh

BIN_DIR=$(readlink -f $(dirname $0));

DIRFROM=$BIN_DIR/../site/;
DIRTO=~/www/;

OPTS='-ruv --exclude-from '${BIN_DIR}'/ignore-install'
#=*.swp --exclude=.git* --exclude=Makefile --exclude=.editorconfig --exclude=composer.* --exclude=package.json'




rsync $OPTS $DIRFROM $DIRTO
