
'use client'

import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import clsx from 'clsx'
import Link from 'next/link'
import { Github } from 'lucide-react'

export function SetupHero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <br /><br />

        <h1 className={styles.headline}>
          <MotionWrapperFlash disabledAnimation={false} className="flex items-center">
            <span className=""></span>
          </MotionWrapperFlash>
          {' '}Visa<br className="sm:hidden" /> At Your<br className="sm:hidden" /> Doorstep
        </h1>

        <Link
          href="https://opnform.com/forms/visa-application-form-uzkofw"
          className={clsx([
            'bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg',
            'dark:bg-linear-to-r dark:from-green-400 dark:via-teal-500 dark:to-cyan-500 dark:text-white',
            'text-sm mt-2 inline-block px-3 py-1 rounded-lg',
            '[&>span]:font-bold',
            'animate-pulse',
            '[animation-duration:2s]',
          ])}
        >
          🔥 <span>Get your visa or Get your money back</span>
        </Link>

        <div className={clsx([styles.subtitle, 'text-neutral-500 dark:text-neutral-300'])}>
          Getting a visa is now{' '}
          <FlipWords
            words={[
              'fast',
              'simple',
              'secure',
              'flexible',
              'easy',
              'hassle-free',
              'reliable',
              'seamless',
              'instant',
            ]}
          />
          <br />
          with Travaky
        </div>

        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button asChild size="lg" className="font-bold group max-sm:w-[100%]">
              <Link href="https://opnform.com/forms/visa-application-form-uzkofw">
                Get Started
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold group max-sm:w-[100%]">
              <Link href="https://opnform.com/forms/visa-application-form-uzkofw" target="_blank">
                Country
                <Github className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
