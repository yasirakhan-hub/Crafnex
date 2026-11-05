import React, { createContext, useContext, useEffect, useState } from 'react';
import { RouteId } from '../types';

interface RouterContextType {
  currentRoute: RouteId;
  navigateTo: (route: RouteId) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const VALID_ROUTES: RouteId[] = [
  'home',
  'games',
  'pricing',
  'features',
  'minecraft-java',
  'minecraft-bedrock',
  'server-software',
  'mods-modpacks',
  'plan-finder',
  'panel-demo',
  'migration-guide',
  'tutorials',
  'knowledgebase',
  'infrastructure',
  'status',
  'about',
  'contact',
  'faq',
  'login',
  'register',
  'terms',
  'privacy',
  'refund-policy',
  'sla',
  'aup',
];

const getRouteFromHash = (): RouteId => {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.replace('#', '').toLowerCase();
  
  // Legacy aliases
  if (rawHash === 'minecraft') return 'minecraft-java';

  if (VALID_ROUTES.includes(rawHash as RouteId)) {
    return rawHash as RouteId;
  }
  return 'home';
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<RouteId>(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setCurrentRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RouteId) => {
    if (VALID_ROUTES.includes(route)) {
      window.location.hash = `#${route}`;
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
