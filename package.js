Package.describe({
  name: 'perak:omlet',
  version: '1.0.1',
  summary: 'Omlet chat API packaged for Meteor',
  git: 'https://github.com/perak/meteor-omlet.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('omlet.js', 'client');
  api.export('Omlet', 'client');
});
