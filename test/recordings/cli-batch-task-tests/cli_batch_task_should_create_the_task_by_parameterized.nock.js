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
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:00:58 GMT',
  etag: '0x8D3BBFA6A25FF97',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f4c1e12-22fd-41fd-b496-84fada16838c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c1e24cbc-5ce9-48ce-a5f6-fdef507d9085',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  date: 'Thu, 04 Aug 2016 00:00:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:00:58 GMT',
  etag: '0x8D3BBFA6A25FF97',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f4c1e12-22fd-41fd-b496-84fada16838c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c1e24cbc-5ce9-48ce-a5f6-fdef507d9085',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa',
  date: 'Thu, 04 Aug 2016 00:00:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"aaa\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa\",\"eTag\":\"0x8D3BBFA6A25FF97\",\"creationTime\":\"2016-08-04T00:00:58.6465175Z\",\"lastModified\":\"2016-08-04T00:00:58.6465175Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:58.6465175Z\",\"commandLine\":\"echo hello\",\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:58 GMT',
  etag: '0x8D3BBFA6A25FF97',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '189f2c7c-0149-4426-bd8e-7f44669c10d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f2399391-2d6c-49c0-a5cf-6af432039536',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"aaa\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/aaa\",\"eTag\":\"0x8D3BBFA6A25FF97\",\"creationTime\":\"2016-08-04T00:00:58.6465175Z\",\"lastModified\":\"2016-08-04T00:00:58.6465175Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:58.6465175Z\",\"commandLine\":\"echo hello\",\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:00:58 GMT',
  etag: '0x8D3BBFA6A25FF97',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '189f2c7c-0149-4426-bd8e-7f44669c10d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f2399391-2d6c-49c0-a5cf-6af432039536',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f3684ae2-ecac-460e-a0d7-7d7a9a80870f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'bfc9b3e5-fe5e-46ba-bc47-a56ff27b3b4a',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/xplatJobForTaskTests/tasks/aaa?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f3684ae2-ecac-460e-a0d7-7d7a9a80870f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'bfc9b3e5-fe5e-46ba-bc47-a56ff27b3b4a',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:59 GMT',
  connection: 'close' });
 return result; }]];