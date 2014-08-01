#!/bin/sh

#BIN_DIR=$(readlink -f $(dirname $0));
BIN_DIR=$(pwd);
DIRFROM="~/tmp/";
DIRTO="~/www/";

cd $BIN_DIR/../site/
grunt

ssh luiscoms@luiscoms.com.br "rm -r "$DIRFROM

scp -r build luiscoms@luiscoms.com.br:~/tmp/

ssh luiscoms@luiscoms.com.br "rsync -ruv "$DIRFROM" "$DIRTO
