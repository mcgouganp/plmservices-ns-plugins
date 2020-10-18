const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				'ios-sim': {
					script: 'nx run demo:ios-sim',
					description: '⚆  Run iOS on Simulator  ',
				},
				'ios-dev': {
					script: 'nx run demo:ios-dev',
					description: '⚆  Run iOS on Device  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@plmservices/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @plmservices/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@plmservices': {
			// @plmservices/nativescript-sha
			'nativescript-sha': {
				build: {
					script: 'nx run nativescript-sha:build.all',
					description: '@plmservices/nativescript-sha: Build',
				},
			},
			// @plmservices/nativescript-easylink
			'nativescript-easylink': {
				build: {
					script: 'nx run nativescript-easylink:build.all',
					description: '@plmservices/nativescript-easylink: Build',
				},
			},
			// @plmservices/nativescript-outline-label
			'nativescript-outline-label': {
				build: {
					script: 'nx run nativescript-outline-label:build.all',
					description: '@plmservices/nativescript-outline-label: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-sha': {
				script: 'nx run nativescript-sha:focus',
				description: 'Focus on @plmservices/nativescript-sha',
			},
			'nativescript-easylink': {
				script: 'nx run nativescript-easylink:focus',
				description: 'Focus on @plmservices/nativescript-easylink',
			},
			'nativescript-outline-label': {
				script: 'nx run nativescript-outline-label:focus',
				description: 'Focus on @plmservices/nativescript-outline-label',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
