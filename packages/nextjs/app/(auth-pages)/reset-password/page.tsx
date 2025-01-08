import { resetPasswordAction } from "~~/app/actions";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import Link from "next/link";
import { AuthLayout } from "~~/components/layout/auth/auth-layout";
import { AuthForm } from "~~/components/layout/auth/auth-form";
import { Button } from "~~/components/ui/button";

export default async function ResetPassword(props: {
  searchParams: Promise<any>;
}) {
  const searchParams = await props.searchParams;

  return (
    <AuthLayout>
      <AuthForm
        title="Restablecer contraseña"
        subtitle="Por favor, ingresa tu nueva contraseña a continuación."
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Ingresa tu nueva contraseña"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Repeat password</Label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirma tu nueva contraseña"
              required
            />
          </div>

          <Button className="w-full" formAction={resetPasswordAction}>
            Update Password
          </Button>

        </form>

        <div className="mt-4 text-center">
          <Link
            href="/sign-in"
            className="text-sm text-primary hover:underline"
          >
            Back to home
          </Link>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}
