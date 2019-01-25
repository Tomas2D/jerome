import { registerSelector } from '@ackee/redux-worker/worker';

import { BRIDGE_ID } from '../constants';
import { State } from '../types';
import { translateSelector } from '../services/selectors';

registerSelector(BRIDGE_ID, (state: State) => translateSelector(state));
