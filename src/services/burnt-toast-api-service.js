import config from '../config.js';
import TokenService from './token-service';

const BurntToastService = {
  getProfile(profileId) {
    return fetch(`${config.API_ENDPOINT}/profile/${profileId}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getProfileServices(profileId) {
    return fetch(`${config.API_ENDPOINT}/profile/${profileId}/skills`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postProfile(profile) {
    return fetch(`${config.API_ENDPOINT}/profiles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(profile),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postProfileService(service) {
    return fetch(`${config.API_ENDPOINT}/user_skills`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAllCategories() {
    return fetch(`${config.API_ENDPOINT}/categories`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAllServices() {
    return fetch(`${config.API_ENDPOINT}/skills`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getSearchServices(serviceId, searchTerm, searchType, zipcode) {
    // console.log('getSearchServices: ', serviceId, searchTerm, searchType, zipcode)
    return fetch(`${config.API_ENDPOINT}/user_skills/skills/${serviceId}?q=${searchTerm}&t=${searchType}&z=${zipcode}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BurntToastService;