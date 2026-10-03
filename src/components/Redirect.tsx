import { Navigate } from "react-router-dom";

interface RedirectProps {
  to: string;
}

/**
 * Client-side permanent redirect for legacy URLs.
 * Renders nothing; immediately replaces the history entry with the canonical URL.
 */
const Redirect = ({ to }: RedirectProps) => <Navigate to={to} replace />;

export default Redirect;
