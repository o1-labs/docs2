import React from 'react';
import styles from './ResponsiveVideo.module.scss';

const ResponsiveVideo = ({
  src,
  title,
  ...props
}: React.ComponentPropsWithoutRef<'iframe'>) => {
  return (
    <div className={styles.responsiveVideoWrapper}>
      <iframe
        src={src}
        title={title}
        className={styles.responsiveVideo}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        {...props}
      />
    </div>
  );
};

export default ResponsiveVideo;
