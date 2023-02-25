# my-default-frontend-template
 
## let's create a vite app using typescript

```bash
npm create vite@latest
```
when creating the application.
we have to give the application name.
then we have to give the React as the framework and typescript as the language.

## then we can add eslint to our application

```bash
npm init @eslint/config 
```

this will prompt to answer questions regarding your application.

![Alt text](docs/img/1.png)
![Alt text](docs/img/2.png)
![Alt text](docs/img/3.png)
![Alt text](docs/img/4.png)
![Alt text](docs/img/5.png)
![Alt text](docs/img/6.png)
![Alt text](docs/img/7.png)
![Alt text](docs/img/8.png)
![Alt text](docs/img/9.png)
![Alt text](docs/img/10.png)
![Alt text](docs/img/11.png)
![Alt text](docs/img/12.png)
![Alt text](docs/img/13.png)
![Alt text](docs/img/14.png)

these dependencies are needed for the application.

![Alt text](docs/img/15.png)

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react
```

this will generate the eslint config file

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}

```

now our application looks like this.

![Alt text](docs/img/16.png)

since we are using react 18 we do not need to add react to every component

so we will use this extension

![Alt text](docs/img/17.png)

this will remove the React error.

to fix those issues we will run the linter \

![Alt text](docs/img/18.png)

let's run this command

![Alt text](docs/img/19.png)

now we can see the result 

![Alt text](docs/img/20.png)
![Alt text](docs/img/21.png)
![Alt text](docs/img/22.png)

since we are using react hooks let's add linting rules for then as well.

```bash
npm install eslint-plugin-react-hooks --save-dev
```
![Alt text](docs/img/23.png)

and this to extend.

![Alt text](docs/img/24.png)


now let's add prettier


```bash
npm install --save-dev --save-exact prettier
```
then 
```bash
echo {}> .prettierrc.json
echo {}> ..prettierignore
```
ESLint (and other linters)

If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier.

let's add `eslint-config-prettier`

![Alt text](docs/img/25.png)

if you are using vscode 

![Alt text](docs/img/26.png)

add the config

![Alt text](docs/img/27.png)


this sis the config
```json

{
    "arrowParens": "always",
    "singleQuote": true

}
```
let's integrate prettier to the eslint.

we will use `eslint-plugin-prettier `

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.


```bash
npm install --save-dev eslint-plugin-prettier
```

package updated

![Alt text](docs/img/28.png)

adding prettier rules

![Alt text](docs/img/29.png)

adding prettier config

![Alt text](docs/img/30.png)



```json
{
    "env": {
        // browser means this app will run on the browser
		"browser": true,
        // this is the target js version
		"es2021": true
	},
	"extends": [
        // using the plugins we import in the plugins section
		"eslint:recommended",
        // this will add the recommended rules from the react plugin
		"plugin:react/recommended",
        // this will add the recommended rules from the react-hooks plugin
		"plugin:react-hooks/recommended",
        // this will add the recommended rules from the @typescript-eslint
		"plugin:@typescript-eslint/recommended",
         // add the prettier recommended setting
		"plugin:prettier/recommended",
        // so we don't have to import react in every component
		"plugin:react/jsx-runtime"
	],
	"overrides": [],
    // this is used to parse typescript
	"parser": "@typescript-eslint/parser",
    // these are the options for the parsing
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
    // these are the plugins we installed on our application.
    // @typescript-eslint -> @typescript-eslint/eslint-plugin
    // promise -> "eslint-plugin-promise": "^6.1.1",
	"plugins": ["react","@typescript-eslint", "promise"],
	"rules": {
        "prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"endOfLine": "lf",
				"semi": true,
				"useTabs": true,
				"bracketSpacing": true,
				"bracketSameLine": true
			}
		]
        // this will throw an error when we use tabs for indentation.
        // use lf for the line break will fix the crlf files when we run the linter
		"linebreak-style": ["error", "unix"],
		/* this is related to promise" */
		"promise/always-return": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": "error",
		"promise/catch-or-return": "error",
		"promise/no-native": "off",
		"promise/no-nesting": "warn",
		"promise/no-promise-in-callback": "warn",
		"promise/no-callback-in-promise": "warn",
		"promise/avoid-new": "warn",
		"promise/no-new-statics": "error",
		"promise/no-return-in-finally": "warn",
		"promise/valid-params": "warn"
	},
	"settings": {
        // these are related to react eslint plugin
		"react": {
			"version": "18.2.0"
		}
	}
}

```

## eslint config dependencies

### [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
Turns off all rules that are unnecessary or might conflict with Prettier.
### [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

React specific linting rules for eslint


<!-- not completed -->

## Adding lint-staged to lint our staged files.

first install 
```bash
npm install --save-dev lint-staged
```

then create a config file. `.lintstagedrc.json`
```json
{
	"src/**/*.{ts,tsx}": "npm run lint",
	"src/**/*.{html,scss,css}": "prettier --write",
	"*.json": "prettier --write"
}
```

## Husky setup

```bash
npx husky-init && npm install
```
It will set up husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit.
![Alt text](docs/img/31.png)

let's add our lint staged command to our pre commit hook.

![Alt text](docs/img/32.png)

to add new hooks 
```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

let's add commit lint to check our commit message.

let's install the dependencies.
```bash 
npm i -D @commitlint/cli @commitlint/config-conventional
```
![Alt text](docs/img/33.png)

let's add the configuration file to the commitlintrc.json

```json
{
"extends":["@commitlint/config-conventional"],
"rules": {
    "header-max-length": [2, "always", 50]
  }
}
```
let's add this to our commit message hook
to add new hooks 
```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

and change it to `prepare-commit-msg`
```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit $1 --color
```

let's add a protected branch as well.


```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

add this code
```json
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" = "main" ]; then
  echo "You are not allowed to commit changes directly to the development branch"
  exit 1
fi
```

## Adding Redux Toolkit

### Installation
since we are using it with react 
```shell
npm install @reduxjs/toolkit react-redux
```
and types for the React-redux library

```shell
npm i -D @types/react-redux
```
![34.png](docs%2Fimg%2F34.png)