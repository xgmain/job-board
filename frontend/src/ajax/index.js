import axios from 'axios';

export const fetchJobs = async (page) => {
  // console.log(page)
  let res = await axios.get(`${process.env.REACT_APP_API}?page=`+page);
  return res.data;
};

export const getJob = async (id) => {
  let res = await axios.get(`${process.env.REACT_APP_API}/`+id);
  return res.data;
};

export const postJob = async (data) => {
  const json = {
    "title": data.title,
    "location": data.location,
    "description": data.description
  }

  let res = await axios.post(`${process.env.REACT_APP_API}`, json);
  return res.data;
};

export const deleteJob = async (id) => {
  let res = await axios.delete(`${process.env.REACT_APP_API}/`+id);
  return res.data;
};