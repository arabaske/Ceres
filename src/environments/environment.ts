// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBSvux4Hq-TW13gaQ3lpTQ4Xs9mjGS86Zw',
    authDomain: 'martinesstuga.firebaseapp.com',
    databaseURL: 'https://martinesstuga.firebaseio.com',
    projectId: 'martinesstuga',
    storageBucket: 'martinesstuga.appspot.com',
    messagingSenderId: '1093457637627'
  }
};
