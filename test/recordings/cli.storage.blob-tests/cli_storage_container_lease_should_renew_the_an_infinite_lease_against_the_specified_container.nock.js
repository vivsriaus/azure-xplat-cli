// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
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
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '40df40ca-0001-0033-01b5-b1cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Thu, 19 May 2016 10:00:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '40df40ca-0001-0033-01b5-b1cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Thu, 19 May 2016 10:00:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b2212f30-0001-0003-24b5-b19500000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Thu, 19 May 2016 10:00:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b2212f30-0001-0003-24b5-b19500000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Thu, 19 May 2016 10:00:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd524e002-0001-001e-37b5-b14cea000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:00:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 19 May 2016 10:00:43 GMT',
  etag: '"0x8D37FCC7116284D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd524e002-0001-001e-37b5-b14cea000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:00:48 GMT',
  connection: 'close' });
 return result; }]];