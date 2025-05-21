/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type CreateUserDto = object;

export interface User {
  /**
   * id пользователя
   * @example "1"
   */
  id: number;
  /**
   * Почта пользователя
   * @example "user@example.com"
   */
  email: string;
  /**
   * Пароль пользователя
   * @example "1234"
   */
  password: string;
  /**
   * Статус бана пользователя
   * @example false
   */
  isBan: boolean;
  /**
   * Причина бана пользователя
   * @example "Нарушение правил"
   */
  banReason?: string;
}

export type AddRoleDto = object;

export type CreateRoleDto = object;

export interface Role {
  /**
   * id роли
   * @example "1"
   */
  id: number;
  /**
   * Значение роли
   * @example "USER"
   */
  value: string;
  /**
   * Описание роли
   * @example "Обычный зарегистрированный пользователь"
   */
  description: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Bridge
 * @version 1.0
 * @contact
 *
 * Тестовый проект для риал тайма
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCreateUser
     * @request POST:/users
     */
    usersControllerCreateUser: (
      data: CreateUserDto,
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetAllUsers
     * @request GET:/users/all
     */
    usersControllerGetAllUsers: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/users/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetUserById
     * @request GET:/users/{id}
     */
    usersControllerGetUserById: (id: number, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerAddRole
     * @request POST:/users/addRole
     */
    usersControllerAddRole: (data: AddRoleDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/addRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  roles = {
    /**
     * No description
     *
     * @tags Roles
     * @name RolesControllerCreateRole
     * @request POST:/roles/create
     */
    rolesControllerCreateRole: (
      data: CreateRoleDto,
      params: RequestParams = {},
    ) =>
      this.request<Role, any>({
        path: `/roles/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RolesControllerGetRoleByValue
     * @request GET:/roles/{value}
     */
    rolesControllerGetRoleByValue: (
      value: string,
      params: RequestParams = {},
    ) =>
      this.request<Role, any>({
        path: `/roles/${value}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRegistration
     * @request POST:/auth/registration
     */
    authControllerRegistration: (
      data: CreateUserDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/auth/registration`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     */
    authControllerLogin: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
