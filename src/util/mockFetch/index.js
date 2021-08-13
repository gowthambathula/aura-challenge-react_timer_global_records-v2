import { data } from "components/Record/data";

// Util
export function mockFetch() {
  return new Promise((resolve, reject) => {
    const timeout = () => {
      const error = new Error(
        "We're having trouble retrieving that, please try again later"
      );
      error.code = 500;
      const randomDigit = Math.floor(Math.random() * 11);

      randomDigit >= 3 ? resolve(data) : reject(error);
    };

    // Return promise after timeout
    setTimeout(timeout, 2000);
  });
}
