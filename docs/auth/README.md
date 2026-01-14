# Authentication

Authentication with Magister is tricky, especially when you're not approved by magister itself. A way around this is to authenticate as the `m6loapp` or the Magister 6 (`m6`) leer omgeving (`lo`) app (`app`).

There also exists a version for teachers (`op`, Onderwijzend Personeel). But I have not tried interfacing with it.

Magister uses oath to authenticate, the magister authentication uri is `https://{school_name}.magister.net/connect/authorzize`. In order to get it to work, you need to give it some parameters.

1. `client_id`: The client id (`M6LOAPP`)
2. `redirect_uri`: The uri to redirect to, only allows uris that are approved. (for m6loapp: `m6loapp://oath2redirect/`)
3. `scope`: Here you specify what the app must do, in a comma seperated list. Some known scope specifiers are `openid` `profile` `opp.read` `opp.manage` `attendance.overview` `attendance.administration` `calendar.ical.user` `calendar.to-do.user` `grades.read` `grades.manage`
4. `state`: A randomly generated string, usually 16 characters long.
5. `nonce`: A randomly generated string, usually 16 characters long.
6. `code_callenge`: The sha256 digest of a base64 encoded code verifier which is a randomly generated alphanumeric code of usually 28 characters long.
7. `prompt`: Tell it what to do (i.e. `select_account`)

If you have put together an authentication URL, you will need to show this as a webpage to your user. This will show them a magister login page. This can be done through selenium or maybe an iframe if you're really creative.

> You can also let the user give you the username and password to then run it through selenium, to avoid trouble with showing them the page. However **DO NOT DO THIS** this means you have to handle the password insecurely.

When the browser renders the authentication URL it will redirect to the login page url at `https://accounts.magister.net/account/login`, that's where the user will enter their information and log in.

After logging in, the login page will redirect the user to the redirect callback. Which is at `https://{school_name}.magister.net/oidc/redirect_callback.html`. This url gets some parameters from magister, one of which being `access_token` which you can swoop and use for authentication.

3 Existing implementations are that of [rubymag](https://github.com/riley0122/rubymag/blob/84d8b68f02525181708b8ef7448d34470d386abe/lib/magister/authenticator.rb) which is in ruby. And that of [gemairo/magiscore (the old version)](https://github.com/netlob/magiscore/blob/44f169532a9edb8dfc72e659e92d8095dfd7986e/app/Magiscore/www/js/login.js#L202) in JS. Rubymags implementation was heavily 'inspired' from this old magiscore version.
There is also the [new gemairo](https://github.com/gemairo/app/blob/a1cef27bb3f8287ecf159a5544fdd144b9c13a23/lib/apis/magister/api.dart#L261) in dart/flutter.
