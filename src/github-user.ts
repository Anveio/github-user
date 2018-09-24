import { html, Property, Seed, svg, TemplateResult } from "@nutmeg/seed";
import { User } from "./user";
import { GithubApiResponse } from ".";

export class GithubUser extends Seed {
  @Property()
  public user!: GithubApiResponse;

  private readonly months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  private _user_cache!: User;

  constructor() {
    super();
  }

  private get _user(): User {
    if (
      this.user &&
      (!this._user_cache || this._user_cache.id !== this.user.id)
    ) {
      this._user_cache = new User(this.user);
    }
    return this._user_cache;
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();
  }

  /** The component instance has been removed from the DOM. */
  public disconnectedCallback() {
    super.disconnectedCallback();
  }

  /** Watch for changes to these attributes. */
  public static get observedAttributes(): string[] {
    return super.observedAttributes;
  }

  /** Rerender when the observed attributes change. */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private get timestamp() {
    const date = this._user.createdAt;
    const month = this.months[date.getMonth()];
    return `${month} ${date.getFullYear()}`;
  }

  private get logoTemplate(): TemplateResult {
    return svg`<svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;
  }

  private get calendarIcon(): TemplateResult {
    return svg`<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg>`;
  }

  private get linkIcon(): TemplateResult {
    return svg`<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>`;
  }

  private get mapIcon(): TemplateResult {
    return svg`<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"/></svg>`;
  }

  private get verifiedIcon(): TemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72" class="verified"><path fill="none" d="M0 0h64v72H0z"/><path fill="#1da1f2" d="M3 37.315c0 4.125 2.162 7.726 5.363 9.624-.056.467-.09.937-.09 1.42 0 6.103 4.72 11.045 10.546 11.045 1.295 0 2.542-.234 3.687-.686C24.22 62.4 27.827 64.93 32 64.93c4.174 0 7.782-2.53 9.49-6.213 1.148.45 2.39.685 3.69.685 5.826 0 10.546-4.94 10.546-11.045 0-.483-.037-.953-.093-1.42C58.83 45.04 61 41.44 61 37.314c0-4.37-2.42-8.15-5.933-9.946.427-1.203.658-2.5.658-3.865 0-6.104-4.72-11.045-10.545-11.045-1.302 0-2.543.232-3.69.688-1.707-3.685-5.315-6.216-9.49-6.216-4.173 0-7.778 2.53-9.492 6.216-1.146-.455-2.393-.688-3.688-.688-5.827 0-10.545 4.94-10.545 11.045 0 1.364.23 2.662.656 3.864C5.42 29.163 3 32.944 3 37.314z"/><path fill="#FFF" d="M17.87 39.08l7.015 6.978c.585.582 1.35.873 2.116.873.77 0 1.542-.294 2.127-.883.344-.346 15.98-15.974 15.98-15.974 1.172-1.172 1.172-3.07 0-4.243-1.17-1.17-3.07-1.172-4.242 0l-13.87 13.863-4.892-4.868c-1.174-1.168-3.074-1.164-4.242.01-1.168 1.176-1.163 3.075.01 4.244z"/></svg>`;
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style>
        :host {
          --github-user-link-color: #24292e;
          border-radius: 8px;
          border: 1px solid var(--github-user-link-color);
        }

        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        #container {
          background-color: #fff;
        }

        #content {
          padding: 24px 24px 20px 24px;
          position: relative;
        }

        #media {
          width: 100%;
          height: 144px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
        }

        #profile-image-container {
        }

        #profile-image {
          padding-right: 16px;
        }

        #profile-image img {
            padding-right: 16px;
            border-radius: 50%;
            width: 144px;
            height: 144px;
            border: 6px solid #fff;
        }

        #name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 4px;
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
        }

        #names {
          display: inline-flex;
          flex-direction: column;
        }

        #header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        #header-content {
        }

        #text {
          white-space: pre-line;
          margin-top: -16px;
          font-size: 27px;
          line-height: 32px;
          letter-spacing: .01em;
        }

        a {
          color: var(--github-user-link-color);
          text-decoration: none;
          outline: 0;
        }

        a:visited {
          color: var(--github-user-link-color);
          text-decoration: none;
          outline: 0;
        }

        #footer {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
        }

        #counts {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        #names svg {
          width: 18px;
          height: 18px;
        }

        .center {
          text-align: center;
        }

        #footer svg {
          width: 14px;
          height: 14px;
          color: #657786;
        }

        #logo {
          float: right;
        }

        #logo svg {
          width: 42px;
          height: 42px;
        }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <div id="container">
        ${this._user ? this.userTemplate : this.loadingTemplate}
      </div>
    `;
  }

  private get headerTemplate(): TemplateResult {
    return html`
      <div id="header">
        <a id="profile-image-container" href="${
          this._user.profileUrl
        }" target="_blank">
          <span id="profile-image"><img src="${
            this._user.profileImageUrl
          }" /></span>
        </a>
        <div id="user-bio">
          <p>${this._user.bio}</p>
        </div>
        <div id="header-content">
          <div>
            <a href="${this._user.profileUrl}" target="_blank">
              <span id="names">
                <span id="name">${this._user.name}</span>
                <span>${this._user.screen_name}</span>
              </span>
            </a>
            <span id="logo"><a href="${
              this._user.profileUrl
            }" target="_blank">${this.logoTemplate}</a></span>
          </div>
        </div>
      </div>
    `;
  }

  private get locationTemplate(): TemplateResult {
    if (!this._user.location) {
      return html``;
    }
    return html`${this.mapIcon} ${this._user.location}`;
  }

  private get urlTemplate(): TemplateResult {
    if (!this._user.url) {
      return html``;
    }
    return html`${this.linkIcon} <a href="${this._user.url}">${
      this._user.profileUrl
    }</a>`;
  }

  private get footerTemplate(): TemplateResult {
    if (!this._user.location && !this._user.url) {
      return html``;
    }
    return html`
      <div id="footer">
        <div>${this.locationTemplate}</div>
        <div>${this.urlTemplate}</div>
        <div>${this.calendarIcon} Joined ${this.timestamp}</div>
      </div>
    `;
  }

  private get userTemplate(): TemplateResult {
    return html`
      <div id="content">
        ${this.headerTemplate}
        ${this.footerTemplate}
      </div>
    `;
  }

  private get loadingTemplate(): TemplateResult {
    return html`
      <div id="content">
        <p>Loading...</p>
      </div>
    `;
  }
}

window.customElements.define("github-user", GithubUser);
