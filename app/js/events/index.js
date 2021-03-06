import { injectAsyncReducer } from 'store';

import events from './reducers';
import Page from './Page';

injectAsyncReducer('events', events);

export default Page;
