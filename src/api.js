import axios from 'axios'

export const fetchIcon = async(url) => {
  const info = await axios.get(url);
  return (info)
};
