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
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:27 GMT',
  etag: '"0x8D3C27CA9FFA3AD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd7fb5d94-0001-0002-1f65-f494fd000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:48:33.4761481Z',
  date: 'Fri, 12 Aug 2016 06:48:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:27 GMT',
  etag: '"0x8D3C27CA9FFA3AD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd7fb5d94-0001-0002-1f65-f494fd000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-08-12T06:48:33.4761481Z',
  date: 'Fri, 12 Aug 2016 06:48:33 GMT',
  connection: 'close' });
 return result; }]];