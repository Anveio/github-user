import { GithubApiResponse } from ".";

export class User {
  private _data: GithubApiResponse;

  constructor(user: GithubApiResponse) {
    this._data = user;
  }

  public get id(): number {
    return this._data.id;
  }

  public get createdAt(): Date {
    return new Date(Date.parse(this._data.created_at));
  }

  public get profileImageUrl(): string | undefined {
    return this._data.avatar_url;
  }

  public get name(): string {
    return this._data.name;
  }

  public get bio(): string {
    return this._data.bio;
  }

  public get screen_name(): string {
    return this._data.login;
  }

  public get location(): string {
    return this._data.location;
  }

  public get url(): string | undefined {
    return this._data.url || undefined;
  }

  public get profileUrl(): string {
    return this._data.html_url;
  }
}
