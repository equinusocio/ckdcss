import infos from '../package.json';


const today = new Date()
, paths = {
  'lib': 'src/',
  'dist': 'dist/',
  'scss': 'src/',
  'banner': ['/*',
      ' * ' + infos.name,
      ' * v' + infos.version,
      ' * ',
      ' * ' + infos.description,
      ' * ' + infos.homepage,
      ' * ',
      ' * ' + infos.license + ' license',
      ' * ' + today.toDateString('yyyy-MM-dd'),
      ' */',
      ''].join('\n')
};

export default paths;
