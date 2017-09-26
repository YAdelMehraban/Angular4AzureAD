// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	azureConfig: {
		tenant: 'easyonboard.onmicrosoft.com',
		clientId: 'ca81dd3d-4cd9-4b50-b451-74df7f8838d5',
		postLogoutRedirectUri: 'http://localhost:4200/'
	}
};
