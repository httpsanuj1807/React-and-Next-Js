import { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineHook';
export default function Home() {
    
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}