/**
 * Document operation.
 *
 * "document": "npm run _document:licenceReportJSON && npm run _document:licenceReportMarkdown && npm run _document:licenceReportCheck && npm run _document:insertLicensesIntoReadme && npm run _document:licenceTree && npm run _document:licenceTreeCheck",
 * "_document:licenceReportJSON": "license-report --only=prod,peer --department.value=n/a --licensePeriod=n/a --material=n/a --relatedTo.value=n/a > licenses.json",
 * "_document:licenceReportMarkdown": "license-report --config license-report-config.json --only=prod,peer --output=markdown > licenses.md",
 * "_document:licenceReportCheck": "license-report-check --source ./licenses.json --allowed 'MIT' --output=table",
 * "_document:licenceTree": "license-report-recursive --only=prod,peer --department.value=n/a --licensePeriod=n/a --material=n/a --relatedTo.value=n/a --recurse --output=tree > licenseTree.json",
 * "_document:licenceTreeCheck": "license-report-check --source ./licenseTree.json --allowed 'MIT' --output=table",
 * "_document:insertLicensesIntoReadme": "node -e \"import('./dist/datapos-development.es.js').then(m => m.insertLicensesIntoReadme())\"",
 */
declare function document(): Promise<void>;
export { document };
