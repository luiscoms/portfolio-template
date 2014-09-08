#!/bin/sh

ZIPNAME="porfolio"
#BIN_DIR=$(readlink -f $(dirname $0));
BIN_DIR=$(pwd)/$(dirname $0);
DIRFROM="~/tmp/";
DIRTO="~/www/";

echo "BIN_DIR: "$BIN_DIR
cd $BIN_DIR/../site/
grunt

cd build

# zip filename -r files
zip ../$ZIPNAME -r .

cd ..

ssh luiscoms@luiscoms.com.br "rm -rf "$DIRFROM"; mkdir -p "$DIRFROM

# scp -r build luiscoms@luiscoms.com.br:$DIRFROM
scp $ZIPNAME.zip luiscoms@luiscoms.com.br:$DIRFROM

ssh luiscoms@luiscoms.com.br "unzip -o "$DIRFROM/$ZIPNAME.zip" -d "$DIRTO
# ssh luiscoms@luiscoms.com.br "rsync -ruv "$DIRFROM" "$DIRTO

rm $ZIPNAME.zip
