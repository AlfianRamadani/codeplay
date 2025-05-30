
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Start from './page/Start';
import { initializeMaterialsIfNeeded } from './utils/Material';
export const Index = () => {
  useEffect(() => {
    initializeMaterialsIfNeeded();
  }, [])
  return <SafeAreaView><Start /></SafeAreaView>;
};

export default Index;
