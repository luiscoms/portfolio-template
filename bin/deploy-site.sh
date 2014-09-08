#!/bin/sh

ZIPNAME="porfolio"
#BIN_DIR=$(readlink -f $(dirname $0));
BIN_DIR=$(pwd)/$(dirname $0);
REMOTE="luiscoms@luiscoms.com.br";
DIRFROM="~/tmp/";
DIRTO="~/www/";

cd $BIN_DIR/../site/
grunt

cd build

# zip filename -r files
zip ../$ZIPNAME -r .

cd ..

echo "Connecting remote: "$REMOTE
ssh $REMOTE "rm -rf "$DIRFROM"; mkdir -p "$DIRFROM

echo "Sending "$ZIPNAME".zip to "$DIRFROM
# scp -r build luiscoms@luiscoms.com.br:$DIRFROM
scp $ZIPNAME.zip $REMOTE:$DIRFROM

echo "Inflating "$ZIPNAME".zip into "$DIRTO
ssh $REMOTE "unzip -o "$DIRFROM/$ZIPNAME.zip" -d "$DIRTO
# ssh luiscoms@luiscoms.com.br "rsync -ruv "$DIRFROM" "$DIRTO

rm $ZIPNAME.zip
