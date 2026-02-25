import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import { loginSchema } from "./authSchema";
import AuthButton from "../../components/auth/AuthButton";
import AuthHeader from "../../components/auth/AuthHeader";
import PasswordField from "../../components/auth/PasswordField";

export default function Login() {
  

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full max-w-md mx-auto flex flex-col gap-6">
      {/* -------------------- Header Section  -------------------- */}
      <AuthHeader
        title="Welcome Back"
        description="Sign in to continue to your account"
        questionText="Don’t have an account?"
        linkText="Register"
        linkTo="/register"
      />

      {/* -------------------- Login Form --------------------  */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* ---------- Email Input Field ---------- */}
        <Field>
          <FieldLabel htmlFor="email" className="text-foreground">
            Email
          </FieldLabel>
          <Input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="bg-background border-border focus:ring-2 focus:ring-primary"
            {...register("email")}
          />
          {errors.email && (
            <FieldDescription className="text-red-400">
              {errors.email.message}
            </FieldDescription>
          )}
        </Field>

        {/* ----------  Password Input Field  ---------- */}
        <PasswordField
          register={register("password")}
          error={errors.password}
        />

        {/* ----------Forgot Password Link ---------- */}
        <Link
          to="/auth/forgot-password"
          className="text-xs text-left text-muted-foreground hover:text-primary hover:underline cursor-pointer transition"
        >
          Forgot your password?
        </Link>

        {/*  ---------- Submit Button  ---------- */}
        <AuthButton isSubmitting={isSubmitting}>Login</AuthButton>
      </form>
    </section>
  );
}
