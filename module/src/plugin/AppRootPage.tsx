import { AppRootProps } from '@savantly/sprout-api';
import React from 'react';
import { AppPluginSettings } from './types';

interface Props extends AppRootProps<AppPluginSettings> {}

export const AppRootPage = ({ path, onNavChanged, meta }: Props) => {
  return (
    <div>
      <h1>Hello from the Superset module</h1>
    </div>
  );
};
