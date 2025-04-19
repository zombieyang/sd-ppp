# First cd to script directory
cd "$(dirname "$0")"

cd ../..
rm -rf sd-ppp_all.zip
# Create a temporary directory structure
mkdir -p temp_package/sd-ppp
# Copy all required files/directories to the temporary structure
cp -r ./javascript ./static ./sdppp_python __init__.py NOTICE readme.md LICENSE temp_package/sd-ppp/
# Create the zip file from the temporary structure
cd temp_package && zip -r ../sd-ppp_all.zip ./sd-ppp
# Clean up the temporary directory
cd .. && rm -rf temp_package