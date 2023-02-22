# my-default-frontend-template
 
## let's create a vite app using typescript

```bash
npm create vite@latest
```
when creating the application.
we have to give the application name.
then we have to give the react as the frame work and typescript as the language.

## then we can add eslint to our application

```bash
npm init @eslint/config
```

this will prompt to answer questions regarding your application.

this will generate the eslint config file
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
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
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
    // react ->  "eslint-plugin-react": "^7.32.2",
    // @typescript-eslint -> @typescript-eslint/eslint-plugin
    // promise -> "eslint-plugin-promise": "^6.1.1",
	"plugins": ["react", "@typescript-eslint", "promise"],
	"rules": {
        // this will throw an error when we use tabs for indentation.
		"indent": ["error", "tab"],
        // use lf for the line break
		"linebreak-style": ["error", "unix"],
        // use single quotes
		"quotes": ["error", "single"],
        // use semi colons
		"semi": ["error", "always"],
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