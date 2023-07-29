'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function Splashscreen({
  buttonText,
  waitingText,
  finishedText,
  ctaAction,
  cta,
}) {
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const loadingSimulation = () => {
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    }
    loadingSimulation()
  }, [])

  const showDialog = () => {
    setDialogOpen(true)
  }

  const handleContinue = () => {
    // Handle the action to be taken when "Continue" is clicked
    ctaAction()
    // Close the dialog after the action is taken
    setDialogOpen(false)
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <AlertDialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="signIn" onClick={showDialog}>
            {buttonText}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {loading ? (
              <>
                <Image
                  src="/assets/images/splashScreen/flyingPiggy.png"
                  width={200}
                  height={200}
                />
                <h3>{waitingText}</h3>
              </>
            ) : (
              <>
                <Image
                  src="/assets/images/splashScreen/dabbingPiggy.png"
                  width={200}
                  height={200}
                />
                <h3>{finishedText}</h3>
              </>
            )}
          </AlertDialogHeader>
          {/* <AlertDialogDescription>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            )}
          </AlertDialogDescription> */}
          <AlertDialogFooter>
            {loading && (
              <AlertDialogAction onClick={handleContinue}>
                {cta}
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
