// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/testblobcopydir/copytoblob.tmp.txt?copyid=d3918105-9cd2-4099-b5d1-3b1d46f62822&comp=copy')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>NoPendingCopyOperation</Code><Message>There is currently no pending copy operation.\nRequestId:e451f513-0001-0000-3165-f49607000000\nTime:2016-08-12T06:48:39.5700267Z</Message></Error>", { 'content-length': '236',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e451f513-0001-0000-3165-f49607000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/testblobcopydir/copytoblob.tmp.txt?copyid=d3918105-9cd2-4099-b5d1-3b1d46f62822&comp=copy')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>NoPendingCopyOperation</Code><Message>There is currently no pending copy operation.\nRequestId:e451f513-0001-0000-3165-f49607000000\nTime:2016-08-12T06:48:39.5700267Z</Message></Error>", { 'content-length': '236',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e451f513-0001-0000-3165-f49607000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:38 GMT',
  connection: 'close' });
 return result; }]];