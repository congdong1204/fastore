'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signInDefaultValues } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useActionState } from 'react'
import { signInWithCredentials } from '@/lib/actions/user.action'
import { useFormStatus } from 'react-dom'

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  })

  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        type="submit"
        variant="default"
        className="w-full"
        disabled={pending}
      >
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    )
  }

  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            required
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {data && !data.success && (
          <div className="text-destructive text-center">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" target="_self" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignInForm
