import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/config/business";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

// Prinde erorile de afișare ale paginilor, ca vizitatorul să nu vadă un ecran gol.
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Eroare de afișare:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-2xl font-semibold text-foreground">A apărut o problemă la afișarea paginii</h1>
        <p className="text-muted-foreground">
          Reîncarcă pagina sau sună-ne la{" "}
          <a href={BUSINESS.phone.href} className="text-primary underline">
            {BUSINESS.phone.display}
          </a>
          .
        </p>
        <Button onClick={() => window.location.reload()}>Reîncarcă pagina</Button>
      </div>
    );
  }
}

export default ErrorBoundary;
