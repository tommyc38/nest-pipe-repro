module.exports = {
  name: 'class-validator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/class-validator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
