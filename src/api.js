import { API_URL } from './config';

const getAllGoods = async () => {
    const res = await fetch(API_URL);

    return await res.json();
};

const getOnlyGood = async (id) => {
    const res = await fetch(API_URL + id);

    return await res.json();
};

const getGoogsByCategory = async (catName) => {
    const res = await fetch(`${API_URL}category/${catName}`);

    return await res.json()
}

export { getAllGoods, getOnlyGood, getGoogsByCategory };
