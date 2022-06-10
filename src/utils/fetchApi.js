import axios from "axios";
export async function fetchApi({url, method, body, propertyName}) {
  const user = JSON.parse(localStorage.getItem("user")) ?? {};
  try {
    const { data, status } = await axios({
      method,
      url,
      data: body,
      headers: { authorization: user !== null ? user?.token : "" },
    });
    console.log(data);
    if (status === 200 || status === 201) {
      console.log(data);
      return {
        data: data,
        success: true,
        propertyName: `${propertyName} fetched successfully`,
      };
    }
    console.log(url);
    throw new Error("Error occured");
  } catch (e) {
    console.log(e);
    return {
      data: null,
      success: false,
      propertyName: `${propertyName} failed to fetch`,
    };
  }
}
