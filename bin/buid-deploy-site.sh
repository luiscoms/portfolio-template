#!/bin/sh

BIN_DIR=$(readlink -f $(dirname $0));
DIRFROM="~/tmp/";
DIRTO="~/www/";

cd $BIN_DIR/../site/
grunt

scp -r build luiscoms.com.br:~/tmp/

ssh luiscoms@luiscoms.com.br "rsync -ruv "$DIRFROM" "$DIRTO
