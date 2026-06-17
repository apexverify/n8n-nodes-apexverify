import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ApexVerifyApi implements ICredentialType {
	name = 'apexVerifyApi';
	displayName = 'ApexVerify API';
	icon: Icon = 'file:../icons/apexverify.svg';
    documentationUrl = 'https://documentation.apexverify.com/api-reference';
    

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description:
				'Enter your ApexVerify API Key. You can find or generate it in your ApexVerify dashboard API settings.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
				Accept: 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.apexverify.com',
			url: '/v1/account/credits',
			method: 'GET',
		},
	};
}