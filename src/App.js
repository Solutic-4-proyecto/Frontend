import AppRoutes from "./AppRoutes";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
