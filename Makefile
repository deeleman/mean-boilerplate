init:
	npm install
	sudo mongod --fork --logpath ./logs/mongodb.log
	gulp dev

e2e:
	node_modules/.bin/protractor

api:
	node_modules/.bin/mocha test/server/example.spec.js

.PHONY: init e2e api
