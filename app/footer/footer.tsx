import { Input } from "@/components/ui/input";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-gray-800 p-9 flex flex-col md:flex-row md:items-start items-center md:justify-center gap-10 md:gap-30">

        <div className="md:w-100 space-y-6 text-center md:text-left">
          <div className="flex flex-row items-center justify-center md:justify-start gap-2">
            <div className="w-10 h-10 bg-amber-200 md:w-[40px] md:h-[40px]" />
            <p className="text-white text-2xl md:text-4xl font-bold">Nexcent</p>
          </div>
          <p className="text-white text-sm font-light leading-6">
            Copyright © 2020 Nexcent Ltd. <br /> All rights reserved
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <div className="w-8 h-8 bg-amber-200" />
            <div className="w-8 h-8 bg-amber-200" />
            <div className="w-8 h-8 bg-amber-200" />
            <div className="w-8 h-8 bg-amber-200" />
          </div>
        </div>

        <div className="flex flex-row gap-10 text-center md:text-left">
          <div className="space-y-3">
            <p className="text-white text-lg md:text-xl font-medium mb-2">Company</p>
            <p className="text-white text-sm">About Us</p>
            <p className="text-white text-sm">Blog</p>
            <p className="text-white text-sm">Contact Us</p>
            <p className="text-white text-sm">Pricing</p>
            <p className="text-white text-sm">Testimonials</p>
          </div>
          <div className="space-y-3">
            <p className="text-white text-lg md:text-xl font-medium mb-2">Support</p>
            <p className="text-white text-sm">Help Center</p>
            <p className="text-white text-sm">Terms of Service</p>
            <p className="text-white text-sm">Legal</p>
            <p className="text-white text-sm">Privacy Policy</p>
            <p className="text-white text-sm">Status</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 text-center md:text-left w-full md:w-auto">
          <p className="text-white text-lg md:text-xl font-medium">Stay up to date</p>
          <Input
            placeholder="Your email address"
            className="w-full md:w-[250px] px-4 py-2 rounded bg-gray-300 text-sm"
          />
        </div>
      </footer>
  );
}