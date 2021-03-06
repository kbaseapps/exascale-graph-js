import Collection from './collection';
import { initCytoscape } from './cytoscape';
import { initTables } from './tables';
import { activateControls } from './ui';

/**
 * initialise the KBase Cytoscape set up
 *
 * @export
 */
export default function initKbCytoscape(datasetConfig) {
  window.kbase = {};

  activateControls();
  initTables(datasetConfig);

  window.kbase.cy = initCytoscape('cy');
  window.kbase.headlessCy = initCytoscape();
  window.kbase.collection = new Collection(window.kbase.cy);
}
