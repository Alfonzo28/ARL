import axios from 'axios';
const url = 'http://localhost:4000';
const axiosConfig = {
	withCredentials: true,
};

export const getAxiosInstance = () => {
	return axios.create({ baseURL: url });
};

export const sendContactInfo = async (data) => {
	const resp = await getAxiosInstance().post(`${url}${'/api/sendContactInformation'}`, data, axiosConfig);
	return resp;
};
