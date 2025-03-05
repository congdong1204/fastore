'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signUpDefaultValues } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useActionState } from 'react'
import { signUpUser } from '@/lib/actions/user.action'
import { useFormStatus } from 'react-dom'
import { useSearchParams } from 'next/navigation'

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: '',
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const SignUpButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        type="submit"
        variant="default"
        className="w-full"
        disabled={pending}
      >
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    )
  }

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={signUpDefaultValues.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="confirmPassword"
            required
            defaultValue={signUpDefaultValues.confirmPassword}
          />
        </div>
        <div>
          <SignUpButton />
        </div>
        {data && !data.success && (
          <div className="text-destructive text-center">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{' '}
          <Link href="/sign-in" target="_self" className="link">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm
