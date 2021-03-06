// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource9344' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '02438fa1-ef20-484b-b954-8b0b3f693e19',
  'x-ms-correlation-request-id': '02438fa1-ef20-484b-b954-8b0b3f693e19',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224558Z:02438fa1-ef20-484b-b954-8b0b3f693e19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:45:57 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource9344' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '02438fa1-ef20-484b-b954-8b0b3f693e19',
  'x-ms-correlation-request-id': '02438fa1-ef20-484b-b954-8b0b3f693e19',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224558Z:02438fa1-ef20-484b-b954-8b0b3f693e19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:45:57 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344\",\"name\":\"xTestResource9344\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '64dd07a7-65af-4bbc-952e-d6067a402055',
  'x-ms-correlation-request-id': '64dd07a7-65af-4bbc-952e-d6067a402055',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224600Z:64dd07a7-65af-4bbc-952e-d6067a402055',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344\",\"name\":\"xTestResource9344\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '64dd07a7-65af-4bbc-952e-d6067a402055',
  'x-ms-correlation-request-id': '64dd07a7-65af-4bbc-952e-d6067a402055',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224600Z:64dd07a7-65af-4bbc-952e-d6067a402055',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes7785' under resource group 'xTestResource9344' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0659224e-274b-4e94-8130-9974387fdf63',
  'x-ms-correlation-request-id': '0659224e-274b-4e94-8130-9974387fdf63',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224600Z:0659224e-274b-4e94-8130-9974387fdf63',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:45:59 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes7785' under resource group 'xTestResource9344' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0659224e-274b-4e94-8130-9974387fdf63',
  'x-ms-correlation-request-id': '0659224e-274b-4e94-8130-9974387fdf63',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224600Z:0659224e-274b-4e94-8130-9974387fdf63',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:45:59 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785\",\"name\":\"xTestGrpRes7785\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes7785\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres7785.azurewebsites.net\"],\"webSpace\":\"xTestResource9344-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-001.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource9344-SouthCentralUSwebspace/sites/xTestGrpRes7785\",\"repositorySiteName\":\"xTestGrpRes7785\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres7785.azurewebsites.net\",\"xtestgrpres7785.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres7785.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres7785.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T22:46:10.947\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes7785\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"191.238.241.84,191.238.241.132,191.238.241.146,191.238.241.113\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2115',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ba13f635-3d6f-45a6-a54d-b54a16b2982c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c4848cee-a1c8-42e0-a722-cc69ee6fd141',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:c4848cee-a1c8-42e0-a722-cc69ee6fd141',
  date: 'Sat, 30 Jan 2016 22:46:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785\",\"name\":\"xTestGrpRes7785\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes7785\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres7785.azurewebsites.net\"],\"webSpace\":\"xTestResource9344-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-001.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/xTestResource9344-SouthCentralUSwebspace/sites/xTestGrpRes7785\",\"repositorySiteName\":\"xTestGrpRes7785\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres7785.azurewebsites.net\",\"xtestgrpres7785.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres7785.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres7785.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-01-30T22:46:10.947\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes7785\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"191.238.241.84,191.238.241.132,191.238.241.146,191.238.241.113\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2115',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ba13f635-3d6f-45a6-a54d-b54a16b2982c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c4848cee-a1c8-42e0-a722-cc69ee6fd141',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:c4848cee-a1c8-42e0-a722-cc69ee6fd141',
  date: 'Sat, 30 Jan 2016 22:46:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344\",\"name\":\"xTestResource9344\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '977b7e56-be0c-4ef8-977a-974354151bce',
  'x-ms-correlation-request-id': '977b7e56-be0c-4ef8-977a-974354151bce',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:977b7e56-be0c-4ef8-977a-974354151bce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:10 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344\",\"name\":\"xTestResource9344\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '977b7e56-be0c-4ef8-977a-974354151bce',
  'x-ms-correlation-request-id': '977b7e56-be0c-4ef8-977a-974354151bce',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:977b7e56-be0c-4ef8-977a-974354151bce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:10 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/resources?api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785\",\"name\":\"xTestGrpRes7785\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'x-ms-correlation-request-id': '3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:11 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/resources?api-version=2016-02-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xTestResource9344/providers/Microsoft.Web/sites/xTestGrpRes7785\",\"name\":\"xTestGrpRes7785\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'x-ms-correlation-request-id': '3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224611Z:3ab00dfd-ba64-4e96-92ac-ef28bf1471ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:11 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '422e40db-b4a2-411f-a237-ff8d2b78b603',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '67909290-e89b-40c7-9fbb-3365adb90fe4',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224612Z:67909290-e89b-40c7-9fbb-3365adb90fe4',
  date: 'Sat, 30 Jan 2016 22:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '422e40db-b4a2-411f-a237-ff8d2b78b603',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '67909290-e89b-40c7-9fbb-3365adb90fe4',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224612Z:67909290-e89b-40c7-9fbb-3365adb90fe4',
  date: 'Sat, 30 Jan 2016 22:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'x-ms-correlation-request-id': 'de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224613Z:de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourcegroups/xTestResource9344?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'x-ms-correlation-request-id': 'de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224613Z:de797ee2-ada9-4133-8871-39cc9e2ed92d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'x-ms-correlation-request-id': '687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'x-ms-routing-request-id': 'WESTUS:20160130T224643Z:687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:43 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'x-ms-correlation-request-id': '687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'x-ms-routing-request-id': 'WESTUS:20160130T224643Z:687fffb3-368f-4066-bfbe-4e1be95d3a41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:46:43 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '163847af-79fb-444e-a057-20a84dc5274b',
  'x-ms-correlation-request-id': '163847af-79fb-444e-a057-20a84dc5274b',
  'x-ms-routing-request-id': 'WESTUS:20160130T224713Z:163847af-79fb-444e-a057-20a84dc5274b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:47:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '163847af-79fb-444e-a057-20a84dc5274b',
  'x-ms-correlation-request-id': '163847af-79fb-444e-a057-20a84dc5274b',
  'x-ms-routing-request-id': 'WESTUS:20160130T224713Z:163847af-79fb-444e-a057-20a84dc5274b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:47:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'x-ms-correlation-request-id': 'fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224745Z:fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:47:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'x-ms-correlation-request-id': 'fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224745Z:fd36e6f2-f865-40ed-b631-fe0d4b65fc98',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:47:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'x-ms-correlation-request-id': '749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224815Z:749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:48:14 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFOTM0NC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'x-ms-correlation-request-id': '749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'x-ms-routing-request-id': 'CENTRALUS:20160130T224815Z:749ccbe7-a6c9-4922-9ea1-d0d55055e651',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 30 Jan 2016 22:48:14 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource9344','xTestGrpRes7785'];};