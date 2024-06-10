const experienceList = [
  {
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2023 to Present',
    position: 'Senior Full Stack Engineer',
    company: 'Rushfaster',
    summary: `<ul>
      <li>Building a server side rendered react website.</li>
      <li>Building a CMS platform to power the website.</li>
      <li>Implemented CI/CD pipeline</li>
      </ul>
    `,
  },
  {
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2019 to Present',
    position: 'Technical Lead',
    company: 'WooliesX',
    summary: `<ul>
      <li>Designed, architected and led the delivery of the Everyday Rewards App for NZ</li>
      <li>Helped lead the design and delivery of the Everyday Rewards App for Australia</li>
      <li>Architected the integration and migration of Eagle Eye into the Everyday Rewards App</li>
      <li>Delivery lead for the eReceipts project for the Everyday Rewards App()</li>
      <li>Built helper tools for fetching accessTokens for testing and automation</li>
      <li>Built CMS for Everyday Rewards App (Typescript, React SSR)</li>
      <li>Built the Ads and Content Service to connect Woolworths Shopping App with Adobe Target</li>
      <li>Built integration services to help with the migration of services from legacy Rewards platform to Eagle Eye.</li>
      <li>Built an Android App to help testers create test data (Kotlin/Compose)</li>
      <li>Built an iOS app to prototype GraphQL Subscriptions (Swift/SwiftUI)</li>
    </ul>`,
}, {
    logo: '/public/assets/amp_round_logo.png',
    timeframe: '2018 to 2019',
    position: 'Technical Lead',
    company: 'AMP',
    summary: `
    <ul>
      <li>Implemented deployment scripts for the building and deployment of Kubernetes cluster on AWS</li>
      <li>Upgrade their backend services to the latest versions of NodeJS</li>
      <li>Rebuilt their Kubernetes ingress service for DDC platform</li>
      <li>Built new management and query tools for their MongoDB database to help the support team trouble shoot issues.</li>
      <li>Secured their elastic search logging system by implementing filters to remove PII data</li>
    </ul>`,

  }, {
    logo: '/public/assets/commonwealth_bank_round_logo.png',
    timeframe: '2017 to 2018',
    position: 'Senior Devops Engineer',
    company: 'Commonwealth Bank',
    summary: `
    <ul>
      <li>Security hardening of the Kubernetes cluster to pass PCI compliance</li>
      <li>Designed and implemented centralized logging system utilizing Sumologic and Fluentd</li>
      <li>Designed and implemented Kubernetes cluster and micro service monitoring and alerting using Prometheus and Grafana. This included instrumenting each microservice, and designing and build the dashboards for each service.</li>
      <li>Building a business metrics dashboard using NodeJS, Postresql, Prometheus and Grafana that provided real-time business statistics such as user registrations and user activity</li>
      <li>Designing performance tests for the infrastructure that could also be used for end-to-end testing using Artillery.io</li>
      <li>Building mock environments for testing</li>
      <li>Building mock identity services to mimic Auth0 for automation testing</li>
      <li>Building test-utilities for the native developers</li>
      <li>Building a Fluentd plugin to redact sensitive data using Ruby</li>
      <li>Writing a decoding script to help with code reviews of Kubernetes secrets</li>
      <li>Improved UI and implemented admin portal features such as viewing payment transaction logs</li>
    </ul>`,
  }, {
    logo: '/public/assets/accenture_round_logo.png',
    timeframe: '2017',
    position: 'Senior Devops Engineer',
    company: 'Accenture',
    summary: `
      <ul>
        <li>Implemented centralized logging with Fluentd to ElasticSearch and S3</li>
        <li>Implemented Docker security hardening for Tectonic to meet CIS benchmarks</li>
        <li>Designed and implemented anti-virus scanning for CoreOS</li>
        <li>Implemented Cloudwatch metrics for CoreOS</li>
        <li>Implemented Kubernetes security hardening to meet CIS benchmarks</li>
        <li>Wrote automated security tests for Docker</li>
        <li>Customised Terraform scripts to deploy Kubernetes clusters in AWS in a hardened VPC without internet connectivity</li>
      </ul>`,
  }, {
    logo: '/public/assets/excelera_round@2x.png',
    timeframe: '2008 to Present',
    position: 'Senior Software Engineer',
    company: 'Excelera Pty Ltd',
    summary: `
      <ul>
        <li>Defined the software requirements, including discussing business problems and requirements with potential customers</li>
        <li>Selected the technology stack to use (PHP and MySQL before moving to MongoDB, Angular and NodeJS)</li>
        <li>Designed the database models (MongoDB, MySQL and Postgresql)</li>
        <li>Designed the development environment and toolset (Vagrant and Ansible)</li>
        <li>Implemented the REST API (NodeJS) for ERP platform</li>
        <li>Designed and wrote e-commerce websites for clients</li>
      </ul>`,
}];

export default experienceList;
