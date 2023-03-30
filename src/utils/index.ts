import { Octokit } from "@octokit/core";
import { RequestParameters } from "@octokit/types";

export const requestItems = async (request: string, query?: RequestParameters) => {
    try {
      const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
      const response = await octokit.request(request, query);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

type Callback = (...args: any[]) => void;

export const debounce = (fn: Callback, delay = 300): Callback => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};
