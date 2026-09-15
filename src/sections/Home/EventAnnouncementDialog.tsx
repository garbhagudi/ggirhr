import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { format } from "date-fns";

export type HomeEvent = {
  id: string;
  title: string;
  eventDateTime?: string | null;
  squareImage: { url: string };
};

const DIALOG_BUTTON =
  "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

/**
 * Announcement modal for the next event, shown once on homepage load.
 *
 * The homepage query asks for a single event (`events(first: 1)`), so this
 * takes one event rather than a list.
 */
const EventAnnouncementDialog = ({ event }: { event: HomeEvent }) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={closeDialog}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold py-1.5 leading-6 text-gray-900 text-center font-heading"
                >
                  {event.title}
                </DialogTitle>

                <Link href="/events" className="mt-2 block">
                  <Image
                    src={event.squareImage.url}
                    alt={event.title}
                    width={500}
                    height={500}
                    className="rounded-md"
                    loading="lazy"
                  />
                </Link>

                <div className="mt-4 flex flex-col items-center justify-center">
                  {event.eventDateTime && (
                    <p className="px-7 pb-2 text-brandBlue font-bold">
                      Date: {format(new Date(event.eventDateTime), "dd MMMM yyyy")} at{" "}
                      {format(new Date(event.eventDateTime), "HH:mm")}
                    </p>
                  )}

                  <div className="space-x-3">
                    <Link href="/events" className={DIALOG_BUTTON}>
                      Visit Page
                    </Link>
                    <button
                      type="button"
                      className={DIALOG_BUTTON}
                      onClick={closeDialog}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EventAnnouncementDialog;
