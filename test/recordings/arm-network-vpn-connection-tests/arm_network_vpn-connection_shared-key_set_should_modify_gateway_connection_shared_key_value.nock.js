// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"b1ac6f83-dd9c-4268-b2be-30e21a65bdad\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9aa388c2-2305-4c1d-b188-ceeaa4101ca2\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3d5d85a9-8e3a-404e-a9a2-84b6866f9cd1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9f4a75a2-9347-4d84-bbb5-19f10e5fec0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123000Z:9f4a75a2-9347-4d84-bbb5-19f10e5fec0e',
  date: 'Fri, 08 Jan 2016 12:29:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"b1ac6f83-dd9c-4268-b2be-30e21a65bdad\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9aa388c2-2305-4c1d-b188-ceeaa4101ca2\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3d5d85a9-8e3a-404e-a9a2-84b6866f9cd1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9f4a75a2-9347-4d84-bbb5-19f10e5fec0e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123000Z:9f4a75a2-9347-4d84-bbb5-19f10e5fec0e',
  date: 'Fri, 08 Jan 2016 12:29:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn/sharedkey?api-version=2015-06-15', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '912da56f-3e67-4f71-9dc6-aec864baa7d9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/912da56f-3e67-4f71-9dc6-aec864baa7d9?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'acc5fa38-338b-41c6-a4e1-119025218788',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123001Z:acc5fa38-338b-41c6-a4e1-119025218788',
  date: 'Fri, 08 Jan 2016 12:30:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn/sharedkey?api-version=2015-06-15', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '912da56f-3e67-4f71-9dc6-aec864baa7d9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/912da56f-3e67-4f71-9dc6-aec864baa7d9?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'acc5fa38-338b-41c6-a4e1-119025218788',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123001Z:acc5fa38-338b-41c6-a4e1-119025218788',
  date: 'Fri, 08 Jan 2016 12:30:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn/sharedkey?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": \"xyz987\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '25',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cddee9b2-f7f4-4e93-8a85-b896c83c3692',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2f7b1c9f-68e7-4950-8063-28ede5c5c0cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123002Z:2f7b1c9f-68e7-4950-8063-28ede5c5c0cc',
  date: 'Fri, 08 Jan 2016 12:30:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn/sharedkey?api-version=2015-06-15')
  .reply(200, "{\r\n  \"value\": \"xyz987\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '25',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cddee9b2-f7f4-4e93-8a85-b896c83c3692',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2f7b1c9f-68e7-4950-8063-28ede5c5c0cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T123002Z:2f7b1c9f-68e7-4950-8063-28ede5c5c0cc',
  date: 'Fri, 08 Jan 2016 12:30:02 GMT',
  connection: 'close' });
 return result; }]];