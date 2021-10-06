import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AccountInfoContextData {
  isVisible: boolean;
  onChangeVisibility: () => void;
}

interface AccountInfoProviderProps {
  children: ReactNode;
}

const AccountInfoContext = createContext({} as AccountInfoContextData);

export function AccountInfoProvider({children}: AccountInfoProviderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const onChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <AccountInfoContext.Provider value={{onChangeVisibility, isVisible}}>
      {children}
    </AccountInfoContext.Provider>
  );
}

export function useAccountInfo() {
  const context = useContext(AccountInfoContext);

  if (!context) {
    throw new Error('useSidebarDrawer must be within SidebarDrawerProvider');
  }

  return context;
}
