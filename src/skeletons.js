// Will use skeletons to improve UI

export default function DashboardSkeleton() {
    return (
      <>
        <div
          className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChartSkeleton />
          <LatestInvoicesSkeleton />
        </div>
      </>
    );
  }

  export function LatestInvoicesSkeleton() {
    return (
      <div
        className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}
      >
        <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
          <div className="bg-white px-6">
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <InvoiceSkeleton />
            <div className="flex items-center pb-2 pt-6">
              <div className="h-5 w-5 rounded-full bg-gray-200" />
              <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }