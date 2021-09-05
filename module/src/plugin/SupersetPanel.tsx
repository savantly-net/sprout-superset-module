import { PanelProps } from '@savantly/sprout-api';
import { stylesFactory } from '@savantly/sprout-ui';
import { SuperChart } from '@superset-ui/core';
import { css, cx } from 'emotion';
import React from 'react';
import { basicData, basicFormData } from './data/TestData';

interface Props extends PanelProps {}

export const SupersetPanel: React.FC<Props> = ({ options, width, height }: Props) => {
  const styles = getStyles();

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <SuperChart
        chartType="table"
        datasource={{
          columnFormats: {},
        }}
        width={width}
        height={height}
        queriesData={[{ data: basicData }]}
        formData={basicFormData}
      />
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
