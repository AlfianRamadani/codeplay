import { useEffect } from 'react';
import { LogBox, SafeAreaView } from 'react-native';
import Start from './page/Start';
import { initializeMaterialsIfNeeded } from './utils/Material';
export const Index = () => {
  useEffect(() => {
    initializeMaterialsIfNeeded();
  }, [])

  LogBox.ignoreAllLogs();

  return <SafeAreaView><Start /></SafeAreaView>;
};

export default Index;
