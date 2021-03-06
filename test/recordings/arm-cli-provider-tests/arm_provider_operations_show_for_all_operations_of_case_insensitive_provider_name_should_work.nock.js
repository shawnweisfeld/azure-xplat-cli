// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '7e2dffb5-45b5-475a-91be-d3d9973c82d4',
    name: 'AUX Dashboard Subscription',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/MICROSOFT.inSiGHTs?api-version=2015-07-01&$expand=resourceTypes')
  .reply(200, "{\"displayName\":\"Microsoft Monitoring Insights\",\"operations\":[],\"resourceTypes\":[{\"name\":\"AlertRules\",\"displayName\":\"Alert Rules\",\"operations\":[{\"name\":\"Microsoft.Insights/AlertRules/Write\",\"displayName\":\"Alert Rule write\",\"description\":\"Writing to an alert rule configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AlertRules/Delete\",\"displayName\":\"Alert Rule delete\",\"description\":\"Deleting an alert rule configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AlertRules/Read\",\"displayName\":\"Alert Rule read\",\"description\":\"Reading an alert rule configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AlertRules/Activated/Action\",\"displayName\":\"Alert Rule activated\",\"description\":\"Alert Rule activated\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AlertRules/Resolved/Action\",\"displayName\":\"Alert Rule resolved\",\"description\":\"Alert Rule resolved\",\"origin\":null,\"properties\":{}}]},{\"name\":\"AlertRules/Incidents\",\"displayName\":\"Alert Rules\",\"operations\":[{\"name\":\"Microsoft.Insights/AlertRules/Incidents/Read\",\"displayName\":\"Alert Rule Incidents read\",\"description\":\"Reading an alert rule configuration\",\"origin\":null,\"properties\":{}}]},{\"name\":\"eventtypes/values\",\"displayName\":\"Events\",\"operations\":[{\"name\":\"Microsoft.Insights/eventtypes/values/Read\",\"displayName\":\"Event types management values read\",\"description\":\"Read management event type values\",\"origin\":null,\"properties\":{}}]},{\"name\":\"eventtypes/digestevents\",\"displayName\":\"Digest events\",\"operations\":[{\"name\":\"Microsoft.Insights/eventtypes/digestevents/Read\",\"displayName\":\"Event types management digest read\",\"description\":\"Read management event type digest\",\"origin\":null,\"properties\":{}}]},{\"name\":\"AutoscaleSettings\",\"displayName\":\"Autoscale\",\"operations\":[{\"name\":\"Microsoft.Insights/AutoscaleSettings/Write\",\"displayName\":\"Autoscale Setting write\",\"description\":\"Writing to an autoscale setting configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AutoscaleSettings/Delete\",\"displayName\":\"Autoscale Setting delete\",\"description\":\"Deleting an autoscale setting configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AutoscaleSettings/Read\",\"displayName\":\"Autoscale Setting read\",\"description\":\"Reading an autoscale setting configuration\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AutoscaleSettings/Scaleup/Action\",\"displayName\":\"Autoscale scale up operation\",\"description\":\"Autoscale scale up operation\",\"origin\":null,\"properties\":{}},{\"name\":\"Microsoft.Insights/AutoscaleSettings/Scaledown/Action\",\"displayName\":\"Autoscale scale down operation\",\"description\":\"Autoscale scale down operation\",\"origin\":null,\"properties\":{}}]}],\"id\":\"/providers/Microsoft.Authorization/providerOperations/microsoft.insights\",\"type\":\"Microsoft.Authorization/providerOperations\",\"name\":\"microsoft.insights\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2888',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2024497e-1213-4398-8610-95b0ea5955c2',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '9ffb2be2-5077-4204-a834-c99e04a49acc',
  'x-ms-routing-request-id': 'WESTUS:20151009T173849Z:9ffb2be2-5077-4204-a834-c99e04a49acc',
  date: 'Fri, 09 Oct 2015 17:38:49 GMT' });
 return result; }]];