// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bc52d16c-7e3a-497b-96e4-cf4f447ccd1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8e6b1b0e-5526-4b75-89c5-5b1ed02a560d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser',
  date: 'Thu, 04 Aug 2016 00:01:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bc52d16c-7e3a-497b-96e4-cf4f447ccd1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8e6b1b0e-5526-4b75-89c5-5b1ed02a560d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser',
  date: 'Thu, 04 Aug 2016 00:01:20 GMT',
  connection: 'close' });
 return result; }]];