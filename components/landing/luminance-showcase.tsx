import { ArrowIcon, FeatureIcon } from "@/components/icons/line-icons";
import { InteractiveExperience } from "@/components/landing/interactive-experience";
import Image from "next/image";

const features = [
  {
    icon: "glow",
    title: "Ambient Glow",
    copy: "Soft, balanced illumination that enhances any space.",
  },
  {
    icon: "form",
    title: "Timeless Form",
    copy: "Minimalist design that never goes out of style.",
  },
  {
    icon: "material",
    title: "Premium Materials",
    copy: "Carefully selected materials for lasting beauty.",
  },
  {
    icon: "detail",
    title: "Thoughtful Details",
    copy: "Every detail is crafted to elevate your experience.",
  },
] as const;

export function LuminanceShowcase() {
  return (
    <div className="mx-auto w-full max-w-[86rem] bg-[#fcfcfb] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <section
        className="grid gap-3 lg:grid-cols-[1.3fr_1fr]"
        id="philosophy"
        aria-labelledby="philosophy-heading"
      >
        <article className="grid min-h-[22rem] overflow-hidden rounded-2xl bg-[#f4f2ee] sm:grid-cols-2">
          <div className="flex flex-col justify-between p-7 sm:p-9">
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-wide text-stone-500">
                Philosophy
              </p>
              <h2
                className="mt-3 font-serif text-2xl leading-[1.08] tracking-tight text-stone-800 sm:text-3xl"
                id="philosophy-heading"
              >
                Designed to disappear into the atmosphere while transforming it
                completely.
              </h2>
            </div>
            <a
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-stone-800"
              href="#experience"
            >
              Discover our story{" "}
              <ArrowIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div
            className="relative min-h-56 overflow-hidden bg-[radial-gradient(circle_at_64%_35%,#fff_0%,#e8e0d6_26%,#9a9083_100%)]"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-[45%] h-14 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-stone-400/50 bg-[radial-gradient(ellipse_at_center,#eee8df_0%,#a99d8e_60%,#62594f_100%)] shadow-[0_12px_22px_rgba(59,50,41,0.25)]" />
            <span className="absolute left-1/2 top-[45%] h-7 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/60" />
          </div>
        </article>
        <div className="grid grid-cols-2 divide-x divide-y divide-stone-200 rounded-2xl bg-[#f8f7f5] p-3">
          {features.map((feature) => (
            <article
              className="flex min-h-36 flex-col justify-center p-4 sm:p-6"
              key={feature.title}
            >
              <FeatureIcon
                className="mb-4 h-6 w-6 text-stone-500"
                type={feature.icon}
                aria-hidden="true"
              />
              <h3 className="text-sm font-semibold tracking-tight text-stone-800">
                {feature.title}
              </h3>
              <p className="mt-1 max-w-40 text-[0.68rem] leading-snug text-stone-500">
                {feature.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
      <InteractiveExperience />
      <section
        className="mt-6 border-t border-stone-200"
        id="collection"
        aria-labelledby="collection-heading"
      >
        <div className="flex items-center justify-between px-3 pt-6 sm:px-0 mb-6">
          <h2
            className="text-xl tracking-tight text-stone-800 sm:text-2xl"
            id="collection-heading"
          >
            Explore the Collection
          </h2>
          <a
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-800"
            href="#products"
          >
            View all luminaires{" "}
            <ArrowIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="px-6 py-4 mb-4 rounded overflow-hidden shadow-lg bg-surface grid grid-cols-2 gap-2">
            <div className="font-bold text-xl mb-2">
              <Image className="w-full" width={50} height={50} src="/images/lamp_light_1.png" alt="Lamp Light" />
            </div>
            <div className="flex flex-col mt-auto pb-4">
              <p className="text-gray-700 text-base">
                ARTHER Table Lamp
              </p>
              <span>From $4.99</span>
            </div>
          </div>
          <div className="px-6 py-4 mb-4 rounded overflow-hidden shadow-lg bg-surface grid grid-cols-2 gap-2">
            <div className="font-bold text-xl mb-2">
              <Image className="w-full" width={50} height={50} src="/images/lamp_light_2.png" alt="Lamp Light" />
            </div>
            <div className="flex flex-col mt-auto pb-4">
              <p className="text-gray-700 text-base">
                ARTHER Floor Lamp
              </p>
              <span>From $4.99</span>
            </div>
          </div>
          <div className="px-6 py-4 mb-4 rounded overflow-hidden shadow-lg bg-surface grid grid-cols-2 gap-2">
            <div className="font-bold text-xl mb-2">
              <Image className="w-full" width={50} height={50} src="/images/lamp_light_3.png" alt="Lamp Light" />
            </div>
            <div className="flex flex-col mt-auto pb-4">
              <p className="text-gray-700 text-base">
                ARTHER Pendant Lamp
              </p>
              <span>From $4.99</span>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4 bg-surface">
          <div className="md:grid grid-cols-4 gap-4 py-5">
            <div className="md:grid grid-cols-3 my-auto pt-3 md:text-left text-center">
                <i className="my-auto flex justify-center md:mr-3">
                  <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 6H3V17.25H3.375H4.5H4.52658C4.70854 18.5221 5.80257 19.5 7.125 19.5C8.44743 19.5 9.54146 18.5221 9.72342 17.25H15.0266C15.2085 18.5221 16.3026 19.5 17.625 19.5C18.9474 19.5 20.0415 18.5221 20.2234 17.25H21.75V12.4393L18.3107 9H16.5V6ZM16.5 10.5V14.5026C16.841 14.3406 17.2224 14.25 17.625 14.25C18.6721 14.25 19.5761 14.8631 19.9974 15.75H20.25V13.0607L17.6893 10.5H16.5ZM15 15.75V9V7.5H4.5V15.75H4.75261C5.17391 14.8631 6.07785 14.25 7.125 14.25C8.17215 14.25 9.07609 14.8631 9.49739 15.75H15ZM17.625 18C17.0037 18 16.5 17.4963 16.5 16.875C16.5 16.2537 17.0037 15.75 17.625 15.75C18.2463 15.75 18.75 16.2537 18.75 16.875C18.75 17.4963 18.2463 18 17.625 18ZM8.25 16.875C8.25 17.4963 7.74632 18 7.125 18C6.50368 18 6 17.4963 6 16.875C6 16.2537 6.50368 15.75 7.125 15.75C7.74632 15.75 8.25 16.2537 8.25 16.875Z" fill="#d9d9d9"></path> </g></svg>
                </i>
                  
                <div className="flex flex-col w-full col-span-2">
                  <p className="text-sm font-semibold mb-2">Free Worldwide Shipping</p>
                  <span className="text-xs">On all orders over $100</span>
                </div>
            </div>
            <div className="md:grid grid-cols-3 my-auto pt-3 md:text-left text-center">
                <i className="my-auto flex justify-center md:mr-3">
                  <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="3" y="6" width="18" height="13" rx="2" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M3 10H20.5" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 15H9" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </i>
                <div className="flex flex-col w-full col-span-2">
                  <p className="text-sm font-semibold mb-2">Secure Payment</p>
                  <span className="text-xs">100% secure checkout</span>
                </div>
            </div>
            <div className="md:grid grid-cols-3 my-auto pt-3 md:text-left text-center">
                <i className="my-auto flex justify-center md:mr-3">
                  <svg fill="#d9d9d9" width="32px" height="32px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M26,2c3,0,5.43,3.29,8.09,4.42s6.82.51,8.84,2.65,1.51,6.07,2.65,8.84S50,23,50,26s-3.29,5.43-4.42,8.09-.51,6.82-2.65,8.84-6.07,1.53-8.84,2.65S29,50,26,50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2,29,2,26s3.29-5.43,4.42-8.09.51-6.82,2.65-8.84,6.07-1.53,8.84-2.65S23,2,26,2Zm0,7.58A16.42,16.42,0,1,0,42.42,26h0A16.47,16.47,0,0,0,26,9.58Zm7.62,9.15,1.61,1.52a1.25,1.25,0,0,1,0,1.51L25.08,33.07a2.07,2.07,0,0,1-1.61.7,2.23,2.23,0,0,1-1.61-.7L16.37,27.6a1,1,0,0,1-.1-1.42l.1-.11L18,24.56a1.1,1.1,0,0,1,1.54-.07l.07.07,3.89,4,8.59-9.8A1.1,1.1,0,0,1,33.62,18.73Z"></path></g></svg>
                </i>
                <div className="flex flex-col w-full col-span-2">
                  <p className="text-sm font-semibold mb-2">2 Years Warranty</p>
                  <span className="text-xs">Quality you can rely on</span>
                </div>
            </div>
            <div className="md:grid grid-cols-3 my-auto pt-3 md:text-left text-center">
                <i className="my-auto flex justify-center md:mr-3">
                  <svg fill="#d9d9d9" width="32px" height="32px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22,22.3h36.9c1.2,0,2.3,1,2.3,2.2v4.7c0,1.2-1,2.3-2.2,2.3H22c-1.2,0-2.3-1-2.3-2.2v-4.7 C19.6,23.4,20.6,22.3,22,22.3C21.9,22.3,21.9,22.3,22,22.3z M72.8,22.3h4.6c1.2,0,2.3,1,2.3,2.2v4.7c0,1.2-1,2.3-2.2,2.3h-4.7 c-1.2,0-2.3-1-2.3-2.2v-4.7c-0.1-1.2,0.9-2.2,2.1-2.3C72.6,22.3,72.8,22.3,72.8,22.3z M45.6,42.8c1.2,0,2.3,1,2.3,2.2v4.7 c0,1.2-1,2.3-2.2,2.3H22c-1.2,0-2.3-1-2.3-2.2v-4.7c0-1.2,1-2.3,2.2-2.3H45.6L45.6,42.8z M36.8,63.3c1.2,0,2.3,1,2.3,2.2v4.7 c0,1.2-1,2.3-2.2,2.3H22c-1.2,0-2.3-1-2.3-2.2v-4.7c0-1.2,1-2.3,2.2-2.3C21.9,63.3,36.8,63.3,36.8,63.3z M78.6,42.2 c1.2,10.7-7.2,21.8-17.2,23.7l-2.7,0.6c-0.5,0.1-0.9,0.6-0.8,1.2c0,0.3,0.2,0.5,0.4,0.6l6.7,4.5c0.7,0.5,0.8,1.4,0.3,2v0.1l-1.7,2.5 c-0.4,0.7-1.4,0.9-2,0.4h-0.1L45.4,66.9c-0.7-0.4-0.9-1.4-0.4-2v-0.1l11-16.2c0.4-0.7,1.4-0.9,2-0.4h0.1l2.5,1.7 c0.7,0.4,0.9,1.4,0.4,2V52l-4.4,6.7c-0.3,0.4-0.3,1.1,0.2,1.4c0.2,0.2,0.5,0.3,0.8,0.2l1.6-0.3c7.8-1.5,14.4-10.3,13.7-17.9 c0-0.7,1.1-1.7,1.9-1.9h1.9C77.6,40.1,78.6,41.3,78.6,42.2z"></path> </g></svg>
                </i>
                <div className="flex flex-col w-full col-span-2">
                  <p className="text-sm font-semibold mb-2">Easty fletums</p>
                  <span className="text-xs">30-day return policy</span>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
}
