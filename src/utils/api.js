import { create, request } from 'axios';

const timeout = 250000;
const config = {
    timeout,
    headers: { 'Content-Type':'application/json'},
}
export const api = (options = {} ) => request( {...config, ...options});
export const instance = create();