import React, { ChangeEvent } from "react";

interface FormFieldsProps {
  formData: {
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    streetAddress: string;
    town: string;
    province: string;
    zipCode: string;
    phone: string;
    email: string;
    additionalInfo: string;
    payment: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleCheckOut: (e: React.FormEvent) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  handleInputChange,
  handleCheckOut,
}) => {
  return (
    <div className="p-4">
      <form
        id="checkout-form" // Add this ID
        onSubmit={handleCheckOut}
        className="grid grid-cols-1 gap-6"
      >
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="First Name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Last Name"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-gray-700">
            Company Name (optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Company Name"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Country"
          />
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="streetAddress" className="block text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Street Address"
          />
        </div>

        {/* Town/City */}
        <div>
          <label htmlFor="town" className="block text-gray-700">
            Town/City
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Town or City"
          />
        </div>

        {/* Province/State */}
        <div>
          <label htmlFor="province" className="block text-gray-700">
            Province/State
          </label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Province or State"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label htmlFor="zipCode" className="block text-gray-700">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Zip Code"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Phone Number"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Email Address"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-gray-700">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            placeholder="Additional Information"
            rows={4}
          />
        </div>

        <button
      type="submit"
      className="mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      Place Order
    </button>
      </form>
    </div>
  );
};

export default FormFields;