/*
 * @文件描述: 可视化大屏模板
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 16:33:09
 */
import React from 'react';
import ScreenHeader from './components/ScreenHeader';
import ScreenLeft from './components/ScreenLeft';
import ScreenCenter from './components/ScreenCenter';
import ScreenRight from './components/ScreenRight';
import styles from './index.module.less';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <ScreenHeader />
      <div className={styles.chartContainer}>
        <ScreenLeft />
        <ScreenCenter />
        <ScreenRight />
      </div>
    </div>
  );
};

export default Homepage;
