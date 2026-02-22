import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h4 className="text-2xl font-bold text-foreground">Welcome Back</h4>
        <p className="text-sm text-muted-foreground">
          Sign in to continue to your account
        </p>
        <p className="text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary font-medium hover:text-secondary transition"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6">
        <Field>
          <FieldLabel htmlFor="email" className="text-foreground">
            Email
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-background border-border focus:ring-2 focus:ring-primary"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password" className="text-foreground">
            Password
          </FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-background border-border focus:ring-2 focus:ring-primary"
          />
        </Field>

        <Link
          to="/auth/forgot-password"
          className="text-xs text-left text-muted-foreground hover:text-primary hover:underline cursor-pointer transition"
        >
          Forgot your password?
        </Link>

        <Button
          type="submit"
          className="bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Sign In
        </Button>
      </form>
    </section>
  );
}
