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
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .put('/testblobcopydest/toCopy?copyid=db0e6934-19dd-4667-99e7-db14db6c6e41&comp=copy')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>NoPendingCopyOperation</Code><Message>There is currently no pending copy operation.\nRequestId:1cb744dd-0001-000c-21c8-b378f6000000\nTime:2015-07-01T06:34:55.0553339Z</Message></Error>", { 'content-length': '236',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1cb744dd-0001-000c-21c8-b378f6000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 01 Jul 2015 06:34:54 GMT' });
 return result; }]];