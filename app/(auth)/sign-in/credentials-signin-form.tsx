'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { signInDefaultValues } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CredentialsSignInForm = () => {
  const [email, setEmail] = useState(signInDefaultValues.email)
  const [password, setPassword] = useState(signInDefaultValues.password)

  return (
    <form>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit" variant="default" className="w-full">
            Sign In
          </Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-primary">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignInForm
