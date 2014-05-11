build:
	grunt build

dist:
	grunt dist

server:
	grunt server

configure:
	npm install
	bundle install

clean:
	echo "TODO write clean task"

.PHONY: build dist server configure clean
