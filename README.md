## Starting off.
made with love from my [boiler](https://github.com/GPudgima/Electron-React)

Clone and CD into dir & run.

### `npm install`

Prepares all node_modules.<br>

### `Don't forget to change Author & App name in Package.json.`

### `You need to have an account with [smsbroadcast](https://smsbroadcast.com.au)`
to be able to use their API you need to sign up and buy credits.<br>
This app was made for my current workplace. I have stripped back all personal details and left it<br>
with the bare-minimum.

## Getting Started

Change `let user = ''` && `let pass = ''` in QuotesComp.js, SendTxtComp.js && Balance.js to your own<br>
username and password. <br>
<br>
Edit `form state` & `let message = ''` to whatever you please. These are currently setup <br>
to use templates from the form to make messages for mass broadcasting.<br>


### `npm run electron-dev`

Runs the app in Dev mode, with live reload/changes.


## Deployment

To deploy you need to run these commands<br>

### `npm run build`
This builds the React side of the App and prepares it for packaging.<br>

### `npm run electron-pack`
Bundles the App into a .exe file ready to be deployed. 
