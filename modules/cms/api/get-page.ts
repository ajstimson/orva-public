import { Page } from '../types'

export const getPage = async (endpoint: string, slug: string): Promise<Page> => {
  try {
    // return null
    //console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${endpoint}/${slug}`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${endpoint}/${slug}`);
    const json = (await response.json()) as Page;
    if (!json) {
      throw new Error("Did not receive data");
    }

    return json;
  } catch (err) {
    console.log(err);
    return null
  }
};
