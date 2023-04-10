import React from "react";
import footerImg from "../../assets/Icons/Group 9969.png";
const Footer = () => {
  return (
    <div className="bg-gray-900 py-16 text-slate-50">
      <div className="container px-6 sm:px-12 md:px-20 mx-auto">
        {/* container start */}

        <div className=" grid grid-cols-2 md:grid-cols-6 gap-4">
          {/* footer section 1 */}
          <div className="col-span-2 space-y-4">
            <h5 className="text-2xl font-bold">CareerHub</h5>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={footerImg} alt="" className="" />
          </div>

          {/* footer section 2 */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold">Company</h5>
            <p className="text-sm text-gray-500">About Us</p>
            <p className="text-sm text-gray-500">Work</p>
            <p className="text-sm text-gray-500">Latest News</p>
            <p className="text-sm text-gray-500">Careers</p>
          </div>
          {/* footer section 3 */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold">Product</h5>
            <p className="text-sm text-gray-500">Prototype</p>
            <p className="text-sm text-gray-500">Plans & Pricing</p>
            <p className="text-sm text-gray-500">Customers</p>
            <p className="text-sm text-gray-500">Integrations</p>
          </div>
          {/* footer section 4 */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold">Support</h5>
            <p className="text-sm text-gray-500">Help Desk</p>
            <p className="text-sm text-gray-500">Sales</p>
            <p className="text-sm text-gray-500">Become a Partner</p>
            <p className="text-sm text-gray-500">Developers</p>
          </div>
          {/* footer section 5 */}
          <div className="space-y-4">
            <h5 className="text-xl font-bold">Contact</h5>
            <p className="text-sm text-gray-500">524 Broadway , NYC</p>
            <p className="text-sm text-gray-500">+1 777 - 978 - 5570</p>
          </div>
        </div>
        <hr className="my-8 border-y-blue-500" />
        <div className="flex items-center justify-between ">
          <p className="text-slate-500">@2023 JobHunter. All Rights Reserved</p>
          <p className="text-slate-500">Powered by JobHunter</p>
        </div>

        {/* container end */}
      </div>
    </div>
  );
};

export default Footer;
