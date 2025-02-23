import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PublicRoute = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <div>Carregando...</div>;
	}

	if (user) {
		return <Navigate to="/" />;
	}

	return children;
};
