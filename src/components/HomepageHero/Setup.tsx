'use client'

import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://github.com/pdsuwwz/nextjs-nextra-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div> */}
        <h1 className={styles.headline}>
          <MotionWrapperFlash
            disabledAnimation={false}
            className="flex items-center"
          >
            <span className=""></span>
          </MotionWrapperFlash>
          {' '}
          Visa
          {' '}
          <br className="sm:hidden"></br>
          {' '}
          At Your
          <br className="sm:hidden"></br>
          {' '}
          Doorstep
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
          dangerouslySetInnerHTML={{
            __html: t('featureSupport', {
              feature: `<span> Get your visa or Get your money back </span>`,
            }),
          }}
        />


        <div className={clsx([
          styles.subtitle,
          'text-neutral-500 dark:text-neutral-300',
        ])}
        >
          Getting a visa is now
          {' '}
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
          with GoVisa.com

        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://opnform.com/forms/visa-application-form-uzkofw"
              >
                {t('getStarted')}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://opnform.com/forms/visa-application-form-uzkofw"
                target="_blank"
              >
                Country
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
