/*
Copyright 2020 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ListPageLayout from './ListPageLayout';

const props = {};

const byName = {
  default: '',
  'kube-public': '',
  'kube-system': '',
  'tekton-pipelines': ''
};

const middleware = [thunk];
const mockStore = configureStore(middleware);

export default {
  component: ListPageLayout,
  title: 'Containers/ListPageLayout'
};

export const Base = args => (
  <ListPageLayout {...props} {...args}>
    page content goes here
  </ListPageLayout>
);
Base.args = {
  hideNamespacesDropdown: false,
  title: 'PipelineRuns'
};
Base.decorators = [
  storyFn => {
    const store = mockStore({
      namespaces: {
        byName,
        isFetching: false
      },
      properties: {}
    });

    return <Provider store={store}>{storyFn()}</Provider>;
  }
];
