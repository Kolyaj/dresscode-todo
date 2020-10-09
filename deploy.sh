./node_modules/.bin/dresscodejs -i js-dev/index.js -o static/js/index.js --layers css
./node_modules/.bin/uglifyjs static/js/index.js -c -m -o static/js/index.js
scp -r static/* blacksreds:/home/kolyaj/projects/todolist
