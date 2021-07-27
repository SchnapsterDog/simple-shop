import React from 'react';
import styles from '../ErrorMessage/styles';

import AppText from '../AppText';

function ErrorMessage({ error }) {
  if (!error) return null;
  return <AppText style={styles.container} title={error} />;
}

export default ErrorMessage;