"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts()
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
    <li className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 rounded-lg">
      <div className="flex items-center gap-4">
        <Image 
          src="/heart.svg"
          alt="Heart"
          height={60}
          width={60}
          className="rounded-full"
        />
        <p className="text-base lg:text-xl font-bold">
          Refill hearts
        </p>
      </div>
      <Button
        onClick={onRefillHearts}
        className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 dark:disabled:bg-primary-700 transition-all"
        disabled={
          pending
          || hearts === 5 
          || points < POINTS_TO_REFILL
        }
      >
        {hearts === 5 ? (
          "Full"
        ) : (
          <>
            <Image
              src="/points.svg"
              alt="Points"
              height={20}
              width={20}
            />
            <span>{POINTS_TO_REFILL}</span>
          </>
        )}
      </Button>
    </li>
    <li className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 rounded-lg mt-2">
      <div className="flex items-center gap-4">
        <Image
          src="/unlimited.svg"
          alt="Unlimited"
          height={60}
          width={60}
          className="rounded-full"
        />
        <p className="text-base lg:text-xl font-bold dark:text-white">
          Unlimited hearts
        </p>
      </div>
      <Button
        onClick={onUpgrade}
        className="inline-flex items-center justify-center py-2 px-4 rounded-lg bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-300 dark:disabled:bg-secondary-700 transition-all"
        disabled={pending}
      >
        {hasActiveSubscription ? "Settings" : "Upgrade"}
      </Button>
    </li>
  </ul>
  
  );
};