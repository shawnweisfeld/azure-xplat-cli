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
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SQL_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b3e75875045f770183c0ffa793adf77d',
  date: 'Fri, 13 Mar 2015 03:49:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers', '*')
  .reply(201, "<ServerName FullyQualifiedDomainName=\"h78wr1potv.database.windows.net\" xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">h78wr1potv</ServerName>", { 'cache-control': 'no-cache',
  'content-length': '149',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7c2b374408867fc1b0c9b4f8c0cd2b95',
  date: 'Fri, 13 Mar 2015 03:49:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'aaad7498c4447c7eab7b620e42ef8e28',
  date: 'Fri, 13 Mar 2015 03:49:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv/firewallrules', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>dbrule</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv/firewallrules/dbrule</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv</ParentLink><StartIPAddress>0.0.0.0</StartIPAddress><EndIPAddress>255.255.255.255</EndIPAddress></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '594',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c5b7f966156d714b9c03a38070312f5e',
  date: 'Fri, 13 Mar 2015 03:49:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '31965a1c9dee73f5b77a61d9f1303022',
  date: 'Fri, 13 Mar 2015 03:49:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv/databases', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>mydb2</Name><Type>Microsoft.SqlAzure.Database</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv/databases/mydb2</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv</ParentLink><Id>4</Id><Edition>Web</Edition><MaxSizeGB>1</MaxSizeGB><CollationName>SQL_Latin1_General_CP1_CI_AS</CollationName><CreationDate>2015-03-13T03:49:58.4770000Z</CreationDate><IsFederationRoot>False</IsFederationRoot><IsSystemObject>False</IsSystemObject><SizeMB i:nil=\"true\"/><MaxSizeBytes>1073741824</MaxSizeBytes><ServiceObjectiveId>910b4fcb-8a29-4c3e-958f-f7ba794388b2</ServiceObjectiveId><AssignedServiceObjectiveId>910b4fcb-8a29-4c3e-958f-f7ba794388b2</AssignedServiceObjectiveId><ServiceObjectiveAssignmentState>1</ServiceObjectiveAssignmentState><ServiceObjectiveAssignmentStateDescription>Complete</ServiceObjectiveAssignmentStateDescription><ServiceObjectiveAssignmentErrorCode>0</ServiceObjectiveAssignmentErrorCode><ServiceObjectiveAssignmentErrorDescription i:nil=\"true\"/><ServiceObjectiveAssignmentSuccessDate>2015-03-13T03:49:59.1500000Z</ServiceObjectiveAssignmentSuccessDate><RecoveryPeriodStartDate i:nil=\"true\"/><IsSuspended>False</IsSuspended></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '1460',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '5ac70717a9867282a5ffb0e4033d2147',
  date: 'Fri, 13 Mar 2015 03:49:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://h78wr1potv.database.windows.net:443')
  .get('/v1/ManagementService.svc/GetAccessToken')
  .reply(200, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\">j6Q82w8XqZtyjdrRduo/zIQX9U4avA9grU9ixzOXBrfVcvPW0mvcA4D0lIWpQ7uWAJ/gZlr+18E5UY0XHc/9BP8YZIQqHbZ0fsDrEqL9G3Kmd5dnKOn8+3MgTKLfZZL39csD8xjarp6YmaEkbarvTEZvO3nnz4nW8ZsVG+AjDAjgq7WX+n3P534lbDAVeY/0jmaNlz0CRcirRZYgwdjjoSHsb0WoTWEig7evi1hgtvYf/OsMFr1IHGuo31yYNf00F08YwTeadRAvEpvlqmnGxeOb5Ln2BAF9Nv893qTgWTyCZIepNiuvwNmrtX6rTXjPUMf1Yrt4aSkmJ2TTbVXgWn/8jx95edghN7T7OnYLl9s4uOimB4psObDnNXZhTNASJMHK1lAXxThVpFHmapaV+3j785xFLH32ZQ9QH5ngAtls3btaPjVZp+tIWxJNDjld8eVn20bcLXmIoMWL4nXlI5Xi/mzHWV7I2jryzkBFVHXAWG2SA3aIQABxiiW88f0K94YxfTpz0H1NGhrWQNISVzP5OknhpJUAt64WATIZ6uupF6s4TzH+TRn9Zk+CNP3MRsIHsPpDutTyeSc2n5NQ5oF2Mo/cUpKs7l2wbyqFkHZ93s8838XSSjAJ50Nejyh48iQBorUF/8tsurqyktRnV6UhKlnu1MeT6/78lIIzlWaIhxVT3FxGxS/kzSMqUjj5zNnbbuyEIy7ySXmAJ/ikhgVrMQ/qjQPWxLeocKANPAPWtZH9rz/KGXdY6F8K403H6fzwUWqBpif4nJvrPnIWvw==</string>", { 'cache-control': 'no-store,no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml; charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1284e192-ac55-e5e5-8d80-756eb407cfe6',
  'set-cookie': [ '.SQLSERVERMANAGEMENT=B0bZZxTQ7dthKxjs1kbf6w==; path=/v1/ManagementService.svc; expires=13-Mar-2015 08:49:59 GMT; domain=.database.windows.net; httponly; secure' ],
  'x-content-type-options': 'nosniff',
  date: 'Fri, 13 Mar 2015 03:49:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://h78wr1potv.database.windows.net:443')
  .get('/v1/ManagementService.svc/Server2(%27h78wr1potv%27)/Databases')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><feed xml:base=\"https://h78wr1potv.database.windows.net/v1/ManagementService.svc/Server2('h78wr1potv')/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><id>https://h78wr1potv.database.windows.net/v1/ManagementService.svc/Server2('h78wr1potv')/Databases</id><title type=\"text\">Databases</title><updated>2015-03-13T03:50:00Z</updated><link rel=\"self\" title=\"Databases\" href=\"Databases\" /><entry><id>https://h78wr1potv.database.windows.net/v1/ManagementService.svc/Server2('h78wr1potv')/Databases(1)</id><category term=\"Microsoft.SqlServer.Management.Server.Domain.Database\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Database\" href=\"Databases(1)\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/Server\" type=\"application/atom+xml;type=entry\" title=\"Server\" href=\"Databases(1)/Server\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/ServiceObjective\" type=\"application/atom+xml;type=entry\" title=\"ServiceObjective\" href=\"Databases(1)/ServiceObjective\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseMetrics\" type=\"application/atom+xml;type=entry\" title=\"DatabaseMetrics\" href=\"Databases(1)/DatabaseMetrics\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseCopies\" type=\"application/atom+xml;type=feed\" title=\"DatabaseCopies\" href=\"Databases(1)/DatabaseCopies\" /><title /><updated>2015-03-13T03:50:00Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:Id m:type=\"Edm.Int32\">1</d:Id><d:Name>master</d:Name><d:ServiceObjectiveId m:type=\"Edm.Guid\">26e021db-f1f9-4c98-84c6-92af8ef433d7</d:ServiceObjectiveId><d:AssignedServiceObjectiveId m:type=\"Edm.Guid\">26e021db-f1f9-4c98-84c6-92af8ef433d7</d:AssignedServiceObjectiveId><d:ServiceObjectiveAssignmentState m:type=\"Edm.Byte\">1</d:ServiceObjectiveAssignmentState><d:ServiceObjectiveAssignmentStateDescription>Complete</d:ServiceObjectiveAssignmentStateDescription><d:ServiceObjectiveAssignmentErrorCode m:type=\"Edm.Int32\">0</d:ServiceObjectiveAssignmentErrorCode><d:ServiceObjectiveAssignmentErrorDescription m:null=\"true\" /><d:ServiceObjectiveAssignmentSuccessDate m:type=\"Edm.DateTime\">2015-03-13T03:49:49.557</d:ServiceObjectiveAssignmentSuccessDate><d:Edition>System</d:Edition><d:MaxSizeGB m:type=\"Edm.Int32\">5</d:MaxSizeGB><d:MaxSizeBytes m:type=\"Edm.Int64\">5368709120</d:MaxSizeBytes><d:CollationName>SQL_Latin1_General_CP1_CI_AS</d:CollationName><d:CreationDate m:type=\"Edm.DateTime\">2015-03-13T03:49:42.52</d:CreationDate><d:RecoveryPeriodStartDate m:type=\"Edm.DateTime\" m:null=\"true\" /><d:IsSystemObject m:type=\"Edm.Boolean\">true</d:IsSystemObject><d:Status m:type=\"Edm.Int32\">1</d:Status><d:IsFederationRoot m:type=\"Edm.Boolean\">false</d:IsFederationRoot><d:SizeMB m:type=\"Edm.Decimal\">-1.00</d:SizeMB><d:IsRecursiveTriggersOn m:type=\"Edm.Boolean\">false</d:IsRecursiveTriggersOn><d:IsReadOnly m:type=\"Edm.Boolean\">false</d:IsReadOnly><d:IsFederationMember m:type=\"Edm.Boolean\">false</d:IsFederationMember><d:IsQueryStoreOn m:type=\"Edm.Boolean\">false</d:IsQueryStoreOn><d:IsQueryStoreReadOnly m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreMaxSizeMB m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreFlushPeriodSeconds m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreIntervalLengthMinutes m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreClearAll m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreStaleQueryThresholdDays m:type=\"Edm.Int32\" m:null=\"true\" /><d:IsSuspended m:type=\"Edm.Boolean\">false</d:IsSuspended></m:properties></content></entry><entry><id>https://h78wr1potv.database.windows.net/v1/ManagementService.svc/Server2('h78wr1potv')/Databases(4)</id><category term=\"Microsoft.SqlServer.Management.Server.Domain.Database\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Database\" href=\"Databases(4)\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/Server\" type=\"application/atom+xml;type=entry\" title=\"Server\" href=\"Databases(4)/Server\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/ServiceObjective\" type=\"application/atom+xml;type=entry\" title=\"ServiceObjective\" href=\"Databases(4)/ServiceObjective\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseMetrics\" type=\"application/atom+xml;type=entry\" title=\"DatabaseMetrics\" href=\"Databases(4)/DatabaseMetrics\" /><link rel=\"http://schemas.microsoft.com/ado/2007/08/dataservices/related/DatabaseCopies\" type=\"application/atom+xml;type=feed\" title=\"DatabaseCopies\" href=\"Databases(4)/DatabaseCopies\" /><title /><updated>2015-03-13T03:50:00Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:Id m:type=\"Edm.Int32\">4</d:Id><d:Name>mydb2</d:Name><d:ServiceObjectiveId m:type=\"Edm.Guid\">910b4fcb-8a29-4c3e-958f-f7ba794388b2</d:ServiceObjectiveId><d:AssignedServiceObjectiveId m:type=\"Edm.Guid\">910b4fcb-8a29-4c3e-958f-f7ba794388b2</d:AssignedServiceObjectiveId><d:ServiceObjectiveAssignmentState m:type=\"Edm.Byte\">1</d:ServiceObjectiveAssignmentState><d:ServiceObjectiveAssignmentStateDescription>Complete</d:ServiceObjectiveAssignmentStateDescription><d:ServiceObjectiveAssignmentErrorCode m:type=\"Edm.Int32\">0</d:ServiceObjectiveAssignmentErrorCode><d:ServiceObjectiveAssignmentErrorDescription m:null=\"true\" /><d:ServiceObjectiveAssignmentSuccessDate m:type=\"Edm.DateTime\">2015-03-13T03:49:59.15</d:ServiceObjectiveAssignmentSuccessDate><d:Edition>Web</d:Edition><d:MaxSizeGB m:type=\"Edm.Int32\">1</d:MaxSizeGB><d:MaxSizeBytes m:type=\"Edm.Int64\">1073741824</d:MaxSizeBytes><d:CollationName>SQL_Latin1_General_CP1_CI_AS</d:CollationName><d:CreationDate m:type=\"Edm.DateTime\">2015-03-13T03:49:58.477</d:CreationDate><d:RecoveryPeriodStartDate m:type=\"Edm.DateTime\" m:null=\"true\" /><d:IsSystemObject m:type=\"Edm.Boolean\">false</d:IsSystemObject><d:Status m:type=\"Edm.Int32\">1</d:Status><d:IsFederationRoot m:type=\"Edm.Boolean\">false</d:IsFederationRoot><d:SizeMB m:type=\"Edm.Decimal\">-1.00</d:SizeMB><d:IsRecursiveTriggersOn m:type=\"Edm.Boolean\">false</d:IsRecursiveTriggersOn><d:IsReadOnly m:type=\"Edm.Boolean\">false</d:IsReadOnly><d:IsFederationMember m:type=\"Edm.Boolean\">false</d:IsFederationMember><d:IsQueryStoreOn m:type=\"Edm.Boolean\">false</d:IsQueryStoreOn><d:IsQueryStoreReadOnly m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreMaxSizeMB m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreFlushPeriodSeconds m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreIntervalLengthMinutes m:type=\"Edm.Int32\" m:null=\"true\" /><d:QueryStoreClearAll m:type=\"Edm.Boolean\" m:null=\"true\" /><d:QueryStoreStaleQueryThresholdDays m:type=\"Edm.Int32\" m:null=\"true\" /><d:IsSuspended m:type=\"Edm.Boolean\">false</d:IsSuspended></m:properties></content></entry></feed>", { 'cache-control': 'no-store,no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=feed;charset=utf-8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1284e192-ac55-e5e5-8d80-756eb407cfe6',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '2.0;',
  date: 'Fri, 13 Mar 2015 03:50:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '9f19b033f6ff7037beef5907f9524cb3',
  date: 'Fri, 13 Mar 2015 03:50:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/h78wr1potv')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6766b235b722735f9da8d7ffa66ce229',
  date: 'Fri, 13 Mar 2015 03:50:01 GMT' });
 return result; }]];