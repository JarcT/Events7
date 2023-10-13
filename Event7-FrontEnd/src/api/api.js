import { toast } from "react-toastify";

const getData = async (sortBy) => {
  try {
    const resp = await fetch(
      `http://localhost:5000/api/v1/events?sortBy=${sortBy}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("Error fetchin data");
  }
};
const postData = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/events", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp = await res.json();
    toast.info(resp);
  } catch (error) {
    console.log(error);
  }
};
const patchData = async (data, id) => {
  try {
    console.log(data, id);
    console.log(JSON.stringify(data));
    const res = await fetch(`http://localhost:5000/api/v1/events/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp = await res.json();
    toast.info(resp.message);
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/events/${id}`, {
      method: "DELETE",
      mode: "cors",
    });
    const resp = await res.json();
    console.log(resp);
    toast.info(resp.message);
  } catch (error) {
    console.log(error);
  }
};

export { getData, postData, patchData, deleteData };
