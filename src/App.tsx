/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ToastProvider } from './context/ToastContext';
import { Plan } from './types';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MockCheckoutModal } from './components/interactive/MockCheckoutModal';

// Page Views
import { HomeView } from './views/HomeView';
import { PlansLandingView } from './views/PlansLandingView';
import { AllPlansView } from './views/AllPlansView';
import { GamesView } from './views/GamesView';
import { PricingView } from './views/PricingView';
import { FeaturesView } from './views/FeaturesView';
import { MinecraftJavaView } from './views/MinecraftJavaView';
import { MinecraftBedrockView } from './views/MinecraftBedrockView';
import { ServerSoftwareView } from './views/ServerSoftwareView';
import { ModsModpacksView } from './views/ModsModpacksView';
import { PlanFinderView } from './views/PlanFinderView';
import { PanelDemoView } from './views/PanelDemoView';
import { MigrationGuideView } from './views/MigrationGuideView';
import { TutorialsView } from './views/TutorialsView';
import { KnowledgebaseView } from './views/KnowledgebaseView';
import { InfrastructureView } from './views/InfrastructureView';
import { StatusView } from './views/StatusView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { TermsView } from './views/TermsView';
import { PrivacyView } from './views/PrivacyView';
import { RefundPolicyView } from './views/RefundPolicyView';
import { SlaView } from './views/SlaView';
import { AupView } from './views/AupView';

const AppContent: React.FC = () => {
  const { currentRoute } = useRouter();
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<Plan | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanForCheckout(plan);
  };

  const renderActiveView = () => {
    switch (currentRoute) {
      // Core Pages
      case 'home':
        return <HomeView onSelectPlan={handleSelectPlan} />;
      case 'plans':
        return <PlansLandingView />;
      case 'all-plans':
        return <AllPlansView onSelectPlan={handleSelectPlan} />;
      case 'games':
        return <GamesView />;
      case 'pricing':
        return <PricingView onSelectPlan={handleSelectPlan} />;
      case 'features':
        return <FeaturesView />;

      // Minecraft Hosting Suite
      case 'minecraft-java':
        return <MinecraftJavaView onSelectPlan={handleSelectPlan} />;
      case 'minecraft-bedrock':
        return <MinecraftBedrockView onSelectPlan={handleSelectPlan} />;
      case 'server-software':
        return <ServerSoftwareView />;
      case 'mods-modpacks':
        return <ModsModpacksView />;
      case 'plan-finder':
        return <PlanFinderView onSelectPlan={handleSelectPlan} />;
      case 'panel-demo':
        return <PanelDemoView />;
      case 'migration-guide':
        return <MigrationGuideView />;
      case 'tutorials':
        return <TutorialsView />;
      case 'knowledgebase':
        return <KnowledgebaseView />;

      // Infrastructure & Network
      case 'infrastructure':
        return <InfrastructureView />;
      case 'status':
        return <StatusView />;

      // Company & Help
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FaqView />;

      // Authentication Mock UI
      case 'login':
        return <LoginView />;
      case 'register':
        return <RegisterView />;

      // Legal & Governance Templates
      case 'terms':
        return <TermsView />;
      case 'privacy':
        return <PrivacyView />;
      case 'refund-policy':
        return <RefundPolicyView />;
      case 'sla':
        return <SlaView />;
      case 'aup':
        return <AupView />;

      default:
        return <HomeView onSelectPlan={handleSelectPlan} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200 bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {renderActiveView()}
      </main>
      <Footer />

      {/* Mock Checkout Modal (Frontend Demonstration Only) */}
      {selectedPlanForCheckout && (
        <MockCheckoutModal
          plan={selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <ToastProvider>
          <RouterProvider>
            <AppContent />
          </RouterProvider>
        </ToastProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
