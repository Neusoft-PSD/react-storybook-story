import { configure } from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.min.css';

configure(function () {
  require('../styles.css');
  require('../src/stories/');
}, module);
