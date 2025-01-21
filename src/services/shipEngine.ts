import axios from "axios";

const SHIPENGINE_API_KEY = "TEST_IyXT5f9pEp24LzTx/T9x8WoFlHr9UNt/aKfOYwC7vfI"; // Replace with your actual API key
const SHIPENGINE_BASE_URL = "https://api.shipengine.com/v1";

// Function to create a shipment
export const createShipment = async (shipmentDetails: any) => {
  try {
    const response = await axios.post(
      `${SHIPENGINE_BASE_URL}/labels`,
      shipmentDetails,
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": SHIPENGINE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating shipment:", error);
    throw new Error("Shipment creation failed");
  }
};

// Function to track a shipment
export const trackShipment = async (trackingNumber: string) => {
  try {
    const response = await axios.get(
      `${SHIPENGINE_BASE_URL}/tracking?carrier_code=ups&tracking_number=${trackingNumber}`,
      {
        headers: {
          "API-Key": SHIPENGINE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error tracking shipment:", error);
    throw new Error("Tracking failed");
  }
};

