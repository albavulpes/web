const path = require('path');

const filenames = {};

filenames.entries = {};
filenames.entries.app = 'app';
filenames.entries.vendor = 'vendor';

filenames.dll = {};
filenames.dll.vendor = 'vendor.dll.json';

filenames.manifests = {};
filenames.manifests.app = 'app.manifest.json';
filenames.manifests.vendor = 'vendor.manifest.json';

exports.filenames = filenames;

const paths = {};

paths.root = path.join(__dirname, '..');
paths.src = path.join(paths.root, 'src');
paths.dist = path.join(paths.root, 'dist');

paths.dll = {};
paths.dll.vendor = path.join(paths.dist, 'vendor.dll.json');

exports.paths = paths;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
exports.isDev = process.env.NODE_ENV === 'development';