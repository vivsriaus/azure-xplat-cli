// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
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
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource8555' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': 'c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'x-ms-correlation-request-id': 'c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230805Z:c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:05 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource8555' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': 'c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'x-ms-correlation-request-id': 'c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230805Z:c3b63ef7-bf9c-4691-8dff-e08c415b9920',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:05 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource8555\",\"name\":\"xTestResource8555\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'x-ms-correlation-request-id': '79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230806Z:79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource8555\",\"name\":\"xTestResource8555\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'x-ms-correlation-request-id': '79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230806Z:79f0de5f-bc93-4a8c-9970-f5c61a944d92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource8555\",\"name\":\"xTestResource8555\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-request-id': '4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'x-ms-correlation-request-id': '4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230806Z:4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:06 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource8555\",\"name\":\"xTestResource8555\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-request-id': '4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'x-ms-correlation-request-id': '4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230806Z:4af9eae5-5830-46f5-a7fb-0cba330be3d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:06 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Storage/operations/60b6b888-0eb0-4431-9de8-288b871e2260?monitor=true&api-version=2015-06-15',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230808Z:79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Storage/operations/60b6b888-0eb0-4431-9de8-288b871e2260?monitor=true&api-version=2015-06-15',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230808Z:79dc5408-4ffd-479b-9247-78cc51ed6c9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Storage/operations/60b6b888-0eb0-4431-9de8-288b871e2260?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"westus\",\"tags\":{},\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '75',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '33c2bbd5-ec25-44df-b040-de85cb7e6563',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '33c2bbd5-ec25-44df-b040-de85cb7e6563',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230838Z:33c2bbd5-ec25-44df-b040-de85cb7e6563',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/Microsoft.Storage/operations/60b6b888-0eb0-4431-9de8-288b871e2260?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"westus\",\"tags\":{},\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '75',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '33c2bbd5-ec25-44df-b040-de85cb7e6563',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '33c2bbd5-ec25-44df-b040-de85cb7e6563',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230838Z:33c2bbd5-ec25-44df-b040-de85cb7e6563',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xtestresource8555/providers/Microsoft.Storage/storageAccounts/xtestgrpres500\",\"location\":\"westus\",\"name\":\"xtestgrpres500\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-11-23T23:08:08.6922104Z\",\"primaryEndpoints\":{\"blob\":\"https://xtestgrpres500.blob.core.windows.net/\",\"file\":\"https://xtestgrpres500.file.core.windows.net/\",\"queue\":\"https://xtestgrpres500.queue.core.windows.net/\",\"table\":\"https://xtestgrpres500.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '674',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bdee0ac3-f529-432e-92bf-139d90df15ba',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'bdee0ac3-f529-432e-92bf-139d90df15ba',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230839Z:bdee0ac3-f529-432e-92bf-139d90df15ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xtestresource8555/providers/Microsoft.Storage/storageAccounts/xtestgrpres500\",\"location\":\"westus\",\"name\":\"xtestgrpres500\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-11-23T23:08:08.6922104Z\",\"primaryEndpoints\":{\"blob\":\"https://xtestgrpres500.blob.core.windows.net/\",\"file\":\"https://xtestgrpres500.file.core.windows.net/\",\"queue\":\"https://xtestgrpres500.queue.core.windows.net/\",\"table\":\"https://xtestgrpres500.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '674',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bdee0ac3-f529-432e-92bf-139d90df15ba',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'bdee0ac3-f529-432e-92bf-139d90df15ba',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230839Z:bdee0ac3-f529-432e-92bf-139d90df15ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xtestresource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xtestresource8555/providers/Microsoft.Storage/storageAccounts/xtestgrpres500\",\"location\":\"westus\",\"name\":\"xtestgrpres500\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-11-23T23:08:08.6922104Z\",\"primaryEndpoints\":{\"blob\":\"https://xtestgrpres500.blob.core.windows.net/\",\"file\":\"https://xtestgrpres500.file.core.windows.net/\",\"queue\":\"https://xtestgrpres500.queue.core.windows.net/\",\"table\":\"https://xtestgrpres500.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '674',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14901',
  'x-ms-correlation-request-id': 'c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230840Z:c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xtestresource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xtestresource8555/providers/Microsoft.Storage/storageAccounts/xtestgrpres500\",\"location\":\"westus\",\"name\":\"xtestgrpres500\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-11-23T23:08:08.6922104Z\",\"primaryEndpoints\":{\"blob\":\"https://xtestgrpres500.blob.core.windows.net/\",\"file\":\"https://xtestgrpres500.file.core.windows.net/\",\"queue\":\"https://xtestgrpres500.queue.core.windows.net/\",\"table\":\"https://xtestgrpres500.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '674',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14901',
  'x-ms-correlation-request-id': 'c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230840Z:c91140a3-656f-4f2c-ac8a-5288159ae7b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xtestresource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e91d1e22-829f-45eb-8a8a-f905d8a605d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '342ed03a-7f07-4522-9c17-ad7bc2b95a1b',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230840Z:342ed03a-7f07-4522-9c17-ad7bc2b95a1b',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xtestresource8555/providers/Microsoft.Storage//storageAccounts/xtestgrpres500/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e91d1e22-829f-45eb-8a8a-f905d8a605d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '342ed03a-7f07-4522-9c17-ad7bc2b95a1b',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230840Z:342ed03a-7f07-4522-9c17-ad7bc2b95a1b',
  date: 'Wed, 23 Nov 2016 23:08:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': 'e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'x-ms-correlation-request-id': 'e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230841Z:e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xTestResource8555?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': 'e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'x-ms-correlation-request-id': 'e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230841Z:e3cdffe5-be68-4ab6-af4e-2d9cdf95e73e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:08:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': 'bdba96d1-a0a5-4d37-a800-0929abface1e',
  'x-ms-correlation-request-id': 'bdba96d1-a0a5-4d37-a800-0929abface1e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230911Z:bdba96d1-a0a5-4d37-a800-0929abface1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:09:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': 'bdba96d1-a0a5-4d37-a800-0929abface1e',
  'x-ms-correlation-request-id': 'bdba96d1-a0a5-4d37-a800-0929abface1e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230911Z:bdba96d1-a0a5-4d37-a800-0929abface1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:09:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-request-id': '7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'x-ms-correlation-request-id': '7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230942Z:7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:09:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-request-id': '7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'x-ms-correlation-request-id': '7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'x-ms-routing-request-id': 'WESTUS2:20161123T230942Z:7519b5ef-5971-4e3c-9198-91ae0a189f60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:09:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'x-ms-correlation-request-id': '08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'x-ms-routing-request-id': 'WESTUS2:20161123T231012Z:08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:10:12 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'x-ms-correlation-request-id': '08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'x-ms-routing-request-id': 'WESTUS2:20161123T231012Z:08ec7b64-6ab4-448c-9c03-e89ee7902593',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:10:12 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'c270145e-cbff-46b6-b195-5405cb419c9e',
  'x-ms-correlation-request-id': 'c270145e-cbff-46b6-b195-5405cb419c9e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T231042Z:c270145e-cbff-46b6-b195-5405cb419c9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:10:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODU1NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'c270145e-cbff-46b6-b195-5405cb419c9e',
  'x-ms-correlation-request-id': 'c270145e-cbff-46b6-b195-5405cb419c9e',
  'x-ms-routing-request-id': 'WESTUS2:20161123T231042Z:c270145e-cbff-46b6-b195-5405cb419c9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 23 Nov 2016 23:10:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource8555','xtestgrpres500'];};