# Build the page
cd website
npm install
yarn build

# Move to root
mv build ../build
cd ..

git checkout gh-pages
ls | grep -v build | xargs rm -rf
mv ./build/halo-documentation/* ./
rm -rf build

git add *
git commit -m "Auto deployment from current documentation"
git push