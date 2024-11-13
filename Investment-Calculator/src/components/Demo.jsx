import { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineHook';
export default function Demo() {

  const isOnline = useOnlineStatus();

  return (<button disabled={!isOnline}>
    {isOnline ? 'Save progress' : 'Reconnecting...'}
  </button>);
}