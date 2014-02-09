
# This script replaces private tokens so that people can't steal our
# dev keys and use them for weird things!

# Then it also copies everything to the "built" dir, so load the chrome
# extension from there instead of the project root


#
# Import vars
#
echo "Importing project_vars!"

if [ -f ./project_vars.sh ];
then
   . ./project_vars.sh
else
   echo "No project_vars.sh to import tokens from!"
   exit
fi

#
# Clean built dir and copy current contents there
#
echo "Cleaning and copying to built/ !"
rm -rf built/*
rsync -rv --exclude=built ./* built/

#
# Replace tokens
#
echo "Replacing tokens:";

for i in "${!token_keys[@]}"; do
   echo "${token_keys[$i]}: ${token_vals[$i]}"

   cd ./built/chrome_extension/js
   pwd
   sed -i.bak "s/${token_keys[$i]}/${token_vals[$i]}/g" popup.js
   rm popup.js.bak

done

