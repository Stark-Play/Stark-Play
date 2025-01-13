import { AuthLayout } from "~~/components/layout/auth/auth-layout";
import { AuthForm } from "~~/components/layout/auth/auth-form";
import Link from "next/link";
import { Label } from "~~/components/ui/label";
import { Input } from "~~/components/ui/input";
import { Button } from "~~/components/ui/button";
import { signInAction } from "~~/app/actions";

export default async function Login(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;

  return (
    <AuthLayout>
      <AuthForm
        title="Welcome Back"
        subtitle={
          <div className="text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              className="text-secondary font-medium hover:underline"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        }
      >
        <form className="space-y-4 text-white">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                className="text-sm text-primary hover:underline"
                href="/forgot-password"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
          </div>

          <Button className="w-full" formAction={signInAction}>
            Log In
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
}
