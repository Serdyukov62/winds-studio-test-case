import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";

import { Entity } from "../types/Entity";
import { baseURL } from "../utils/contants/baseUrl";
import { Row } from "../types/Row";


class Api {
  private request: AxiosInstance;

  constructor(baseURL: string) {
    this.request = axios.create({
      baseURL,
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async createEntity(): Promise<string> {
    return this.request
      .post<Entity>("create")
      .then((entity) => entity.data.id)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  }

  async getRows(eId: string): Promise<Row[]> {
    return this.request
      .get<Row[]>(`${eId}/row/list`)
      .then((entity) => entity.data)
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  }
}

const api = new Api(baseURL);

export default api;
