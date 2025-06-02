
import { Button } from "@/components/ui/button";
import CarouselComponent from "./carousel/carousel";
import HeaderComponent from "./header/header";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header>
        <HeaderComponent />
      </header>
      

      <main className="flex-1">
       
        <section className="w-full bg-slate-50">
          <CarouselComponent />
        </section>

        <section className="w-full p-8 flex flex-col items-center">
          <p className="text-2xl md:text-4xl text-neutral-600 font-semibold text-center">Our Clients</p>
          <p className="text-xs md:text-sm text-neutral-500 text-center mt-2">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="w-full mt-8 flex flex-wrap justify-center md:gap-25 gap-8">
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
            <div className="w-12 h-12 bg-amber-200" />
          </div>
        </section>

        <section className="w-full p-8 flex flex-col items-center">
          <p className="text-2xl md:text-4xl text-neutral-600 font-semibold text-center">Manage your entire community <br /> in a single system</p>
          <p className="text-xs md:text-sm text-neutral-500 text-center mt-2">
            Who is Nexcent suitable for?
          </p>
          <div className="w-full mt-10 flex flex-wrap justify-center md:gap-30 gap-8">
            <div className="w-[300px] h-[260px] p-8 rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <div className="w-15 h-15 mb-3 bg-amber-200"/>
              <p className="text-xl md:text-2xl text-neutral-600 font-bold text-center">
                Membership Organizations
              </p>
              <p className="text-xs md:text-sm text-neutral-500 text-center mt-2">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            <div className="w-[300px] h-[260px] p-8 rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <div className="w-15 h-15 mb-3 bg-amber-200"/>
              <p className="text-xl md:text-2xl text-neutral-600 font-bold text-center">
                National Associations
              </p>
              <p className="text-xs md:text-sm text-neutral-500 text-center mt-2">
                Our membership management software provides full automation of membership renewals and payments
              </p>
          </div>
            <div className="w-[300px] h-[260px] p-8 rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <div className="w-15 h-15 mb-3 bg-amber-200"/>
              <p className="text-xl md:text-2xl text-neutral-600 font-bold text-center">
                Clubs and Groups
              </p>
              <p className="text-xs md:text-sm text-neutral-500 text-center mt-2">
                Our membership management software provides full automation of membership renewals and payments
              </p>
          </div>
          </div>
        </section>

        <section className="w-full p-8 flex md:flex-row flex-col items-center justify-center md:gap-20 gap-5">
          <div className="md:w-[442px] md:h-[433px] w-60 h-40 bg-amber-200" />
          <div className="md:w-150 space-y-4 p-2">
            <p className="text-2xl md:text-4xl text-neutral-600 font-semibold md:text-left text-center">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="text-xs md:text-sm text-neutral-500 mt-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
              Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
              Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>

            {/* Align right on mobile, left on desktop */}
            <div className="flex md:justify-start justify-end">
              <Button className="bg-green-600 border-green-600 text-white font-light md:px-7 md:py-6 px-4 py-3 md:text-sm text-xs rounded-sm">
                Learn More
              </Button>
            </div>
          </div>
        </section>


        <section className="w-full md:p-20 p-8 flex md:flex-row flex-col md:gap-10 gap-6 justify-center items-center md:text-left text-center bg-slate-50">
          <div className="w-140">
            <p className="text-2xl md:text-4xl text-neutral-600 font-medium">
              Helping a local <br /> <span className="text-green-600">business reinvent itself</span> <br />
              <span className="text-xs md:text-base text-zinc-900">We reached here with our hardwork and dedication</span>
            </p> 
          </div>
          <div className="grid grid-cols-2 md:gap-x-10 gap-x-5 md:gap-y-8 gap-y-4 md:w-140 ">
            <div className="flex flex-row gap-3 items-center">
              <div className="md:w-14 md:h-14 w-10 h-10 bg-amber-200" />
              <p className="text-base md:text-3xl text-neutral-600 font-bold leading-5 text-left">
                2,245,341 <br />
                <span className="text-neutral-500 font-light text-xs md:text-sm">Members</span>
              </p>
            </div>
            
            <div className="flex flex-row gap-3 items-center">
              <div className="md:w-14 md:h-14 w-10 h-10 bg-amber-200" />
              <p className="text-base md:text-3xl text-neutral-600 font-bold leading-5 text-left">
                46,328 <br />
                <span className="text-neutral-500 font-light text-xs md:text-sm">Clubs</span>
              </p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <div className="md:w-14 md:h-14 w-10 h-10 bg-amber-200" />
              <p className="text-base md:text-3xl text-neutral-600 font-bold leading-5 text-left">
                828,867<br />
                <span className="text-neutral-500 font-light text-xs md:text-sm">Event Bookings</span>
              </p>
            </div>

            <div className="flex flex-row gap-3 items-center">
               <div className="md:w-14 md:h-14 w-10 h-10 bg-amber-200" />
              <p className="text-base md:text-3xl text-neutral-600 font-bold leading-5 text-left">
                1,926,436 <br />
                <span className="text-neutral-500 font-light text-xs md:text-sm">Payments</span>
              </p>
            </div>
          </div>
        </section>

        <section className="w-full p-8 flex md:flex-row flex-col items-center justify-center md:gap-20 gap-5">
          <div className="md:w-[442px] md:h-[433px] w-60 h-40 bg-amber-200" />
          <div className="md:w-150 space-y-4 p-2">
            <p className="text-2xl md:text-4xl text-neutral-600 font-semibold md:text-left text-center">
              How to design your site footer like we did  
            </p>
            <p className="text-xs md:text-sm text-neutral-500 mt-2 text-justify">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, 
              massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
              In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
              In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
              Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

            {/* Align right on mobile, left on desktop */}
            <div className="flex md:justify-start justify-end">
              <Button className="bg-green-600 border-green-600 text-white font-light md:px-7 md:py-6 px-4 py-3 md:text-sm text-xs rounded-sm">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full p-8 flex md:flex-row flex-col items-center justify-center md:gap-20 gap-5 bg-slate-50">
          <div className="md:w-[326px] md:h-[326px] w-60 h-40 bg-amber-200" />
          <div className="md:w-200 space-y-2 p-2">
            <p className="text-xs md:text-base text-neutral-500 font-medium text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
              Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. 
              Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. 
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. 
              Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <p className="text-xs md:text-base text-green-600 font-bold">
              Tim Smith
            </p>
            <p className="text-xs md:text-sm text-gray-400 font-light">
              British Dragon Boat Racing Association
            </p>
            <div className="md:w-full flex flex-wrap md:gap-8 gap-3 ">
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="w-12 h-12 bg-amber-200" />
              <div className="flex flex-row items-center gap-2">
                <p className="text-base md:text-xl font-semibold text-green-600 text-center mt-2">
                  Meet all customers
                </p>
                <MoveRight className="text-green-600 w-4 h-4 md:w-5 md:h-5 mt-2" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full p-8 flex flex-col items-center">
          <p className="text-2xl md:text-4xl text-neutral-600 font-semibold text-center">Caring is the new marketing</p>
          <div className="md:w-150">
            <p className="text-sm md:text-base text-neutral-500 text-center font-light mt-2">
              The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
              See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​
            </p>
          </div>
          
          <div className="w-full mt-10 flex flex-wrap justify-center md:gap-30 gap-8">
            <div className="w-[317px] h-[180px] bg-slate-50 p-[16px] rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <p className="text-lg md:text-xl text-neutral-500 font-semibold text-center">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-lg md:text-xl font-semibold text-green-600 text-center mt-2">
                  Read More
                </p>
                <MoveRight className="text-green-600 w-5 h-5 md:w-6 md:h-6 mt-2" />
              </div>
            </div>   

            <div className="w-[317px] h-[180px] bg-slate-50 p-[16px] rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <p className="text-lg md:text-xl text-neutral-500 font-semibold text-center">
                What are your safeguarding responsibilities and how can you manage them?
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-lg md:text-xl font-semibold text-green-600 text-center mt-2">
                  Read More
                </p>
                <MoveRight className="text-green-600 w-5 h-5 md:w-6 md:h-6 mt-2" />
              </div>
            </div>   

            <div className="w-[317px] h-[180px] bg-slate-50 p-[16px] rounded-sm shadow-sm flex flex-col items-center justify-center"> 
              <p className="text-lg md:text-xl text-neutral-500 font-semibold text-center">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-lg md:text-xl font-semibold text-green-600 text-center mt-2">
                  Read More
                </p>
                <MoveRight className="text-green-600 w-5 h-5 md:w-6 md:h-6 mt-2" />
              </div>
            </div>   
          </div>
        </section>

        <section className="w-full p-8 flex flex-col gap-6 justify-center items-center bg-slate-50">
          <p className="text-3xl md:text-7xl text-gray-800 font-semibold text-center">
                Pellentesque suscipit<br /> fringilla libero eu. 
          </p>
          <Button className="bg-green-600 md:w-40 w-30 md:py-6 py-5 font-medium md:text-base text-xs rounded-sm">
            Get a Demo
            <MoveRight className="text-white w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </section>

      </main>

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

    </div>
  );
}
