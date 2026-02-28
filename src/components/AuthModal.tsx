import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { authApi } from "../services/api";
import toast from "react-hot-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}

export const AuthModal = ({ isOpen, onClose, mode: initialMode }: AuthModalProps) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        const { token } = await authApi.login(email, password);
        localStorage.setItem("token", token);
        const payload = JSON.parse(atob(token.split('.')[1]));
        toast.success("Login successful!");
        onClose();
        window.location.href = payload.role === 'admin' ? '/admin' : '/dashboard';
      } else {
        await authApi.register(name, email, password, phone);
        toast.success("Registration successful! Please login.");
        setMode("login");
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred");
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6">{mode === "login" ? "Login" : "Sign Up"}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <>
              <Input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </>
          )}
          
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-brandsprimary" disabled={loading}>
            {loading ? "Loading..." : mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm">
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-brandsprimary font-semibold"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};
