import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Messages from "@/pages/messages";
import CustomCursor from "@/components/custom-cursor";
import LanguageSwitcher from "@/components/language-switcher";
import "./i18n/config";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/messages" component={Messages} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <LanguageSwitcher />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;