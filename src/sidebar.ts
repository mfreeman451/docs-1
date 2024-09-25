// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import {
  SidebarCategoriesShorthand,
  SidebarItem,
  SidebarItemCategoryConfig,
  SidebarItemConfig,
} from "@docusaurus/plugin-content-docs/src/sidebars/types"

type ExtendSidebar = SidebarItemConfig[]

const homeLink: SidebarItem = {
  type: "link",
  href: "/welcome",
  className: "all-docs-link",
  label: "Go to Main Page",
}

const referenceSidebar: ExtendSidebar = [
  homeLink,
  {
    type: "category",
    label: "Reference",
    collapsed: false,
    collapsible: false,
    items: [
      "reference/api",
      "sdk",
      {
        type: "category",
        label: "Operations",
        collapsed: false,
        collapsible: false,
        items: [
          "concepts/personal-access-token",
          "guides/cors",
          "guides/rate-limits",
          "guides/ip-allowlist",
          "api/eventual-consistency",
        ],
      },
      {
        type: "category",
        label: "Ory CLI",
        collapsed: false,
        collapsible: false,
        items: [
          "guides/cli/installation",
          "guides/cli/cli-basics",
          "guides/cli/identity-cli",
          "guides/cli/proxy-and-tunnel",
          "guides/cli/config-with-cli",
          {
            type: "category",
            label: "CLI commands",
            items: [
              {
                type: "autogenerated",
                dirName: "cli",
              },
            ],
          },
        ],
      },
    ],
  },
]

const quickstartSidebar = (flat: boolean): ExtendSidebar => {
  const items = []
  if (!flat) {
    items.push(homeLink)
  }

  return [
    ...items,
    {
      type: "category",
      label: "User authentication",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/overview",
      },
      items: flat
        ? []
        : [
            "getting-started/integrate-auth/go",
            "getting-started/integrate-auth/php",
            "getting-started/integrate-auth/expressjs",
            "getting-started/integrate-auth/react",
            "getting-started/integrate-auth/react-native",
            "getting-started/integrate-auth/vue",
            "getting-started/integrate-auth/nextjs",
            "getting-started/integrate-auth/flutter-web-redirect",
            "getting-started/integrate-auth/dotnet",
          ],
    },
    {
      type: "category",
      label: "Permissions and relationships",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "guides/permissions/overview",
      },
      items: flat
        ? []
        : ["keto/examples/olymp-file-sharing", "keto/guides/rbac"],
    },
    {
      type: "category",
      label: "OAuth2 and OpenID",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "guides/oauth2-openid-connect",
      },
      items: flat
        ? []
        : [
            "getting-started/ory-network-oauth2",
            "getting-started/oauth2-openid/expressjs",
          ],
    },
    {
      type: "category",
      label: "Software Development Kits",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "quickstart/sdks",
      },
      items: flat
        ? []
        : [
            {
              type: "category",
              label: "Identity Management",
              items: ["kratos/sdk/go"],
            },
            {
              type: "category",
              label: "OAuth2 & OpenID Connect",
              items: ["hydra/sdk/js", "hydra/sdk/go"],
            },
            {
              type: "category",
              label: "Permissions",
              items: ["keto/sdk/go", "keto/sdk/python"],
            },
          ],
    },
  ]
}
const guidesSidebar = (flat: boolean): ExtendSidebar => {
  const items = []
  if (!flat) {
    items.push(homeLink)
  }

  return [
    ...items,
    {
      type: "category",
      label: "User authentication",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "guides/authentication",
      },
      items: flat
        ? []
        : [
            "getting-started/local-development",
            "kratos/concepts/credentials/username-email-password",
            "kratos/passwordless/one-time-code",
            "kratos/passwordless/passkeys",
            "kratos/organizations/organizations",
            {
              type: "category",
              label: "OpenID Connect SSO",
              items: [
                "kratos/social-signin/overview",
                {
                  type: "category",
                  label: "Social Sign-in Providers",
                  items: [
                    "kratos/social-signin/generic",
                    "kratos/social-signin/ory",
                    "kratos/social-signin/google",
                    "kratos/social-signin/facebook",
                    "kratos/social-signin/microsoft",
                    "kratos/social-signin/github",
                    "kratos/social-signin/apple",
                    "kratos/social-signin/gitlab",
                    "kratos/social-signin/auth0",
                    "kratos/social-signin/salesforce",
                    "kratos/social-signin/slack",
                    "kratos/social-signin/spotify",
                    "kratos/social-signin/discord",
                    "kratos/social-signin/twitch",
                    "kratos/social-signin/netid",
                    "kratos/social-signin/yandex",
                    "kratos/social-signin/vk",
                    "kratos/social-signin/dingtalk",
                    "kratos/social-signin/lark",
                    "kratos/social-signin/patreon",
                    "kratos/social-signin/linkedin",
                    "kratos/social-signin/x-twitter",
                  ],
                },
                "kratos/social-signin/data-mapping",
                "kratos/social-signin/account-linking",
                "kratos/social-signin/get-tokens",
                "identities/sign-in/social-sign-in/redirect-url",
                "kratos/social-signin/native-apps",
              ],
            },
            {
              type: "category",
              label: "Multi-factor authentication",
              items: [
                "kratos/mfa/lookup-secrets",
                "kratos/mfa/totp",
                "kratos/mfa/webauthn-fido-yubikey",
                "kratos/mfa/mfa-via-sms",
                "kratos/mfa/step-up-authentication",
              ],
            },
            {
              type: "category",
              label: "Customized auth flows",
              items: [
                "identities/sign-in/two-step-registration",
                "identities/sign-in/identifier-first-authentication",
                "identities/sign-in/login-hint",
                "identities/sign-in/actions",
              ],
            },
          ],
    },
    {
      type: "category",
      label: "Ory Actions",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "guides/integrate-with-ory-cloud-through-webhooks",
      },
      items: flat
        ? []
        : [
            {
              type: "category",
              label: "Identity management",
              items: [
                "identities/sign-in/actions",
                "actions/revoke-active-sessions",
                "actions/session",
                "actions/require-verified-address",
                {
                  type: "category",
                  label: "Integrations",
                  items: [
                    "actions/integrations/hubspot",
                    "actions/integrations/mailchimp",
                    "actions/integrations/segment",
                  ],
                },
              ],
            },
            "hydra/guides/claims-at-refresh",
          ],
    },
    {
      type: "category",
      label: "Identity management",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/manage-identities/overview",
      },
      items: flat
        ? []
        : [
            "kratos/manage-identities/create-users-identities",
            "kratos/manage-identities/import-user-accounts-identities",
            "identities/model/identity-state",
            "kratos/manage-identities/invite-users",
            "kratos/manage-identities/account-recovery",
            "kratos/manage-identities/export-user-accounts-identities",
          ],
    },
    {
      type: "category",
      label: "Identity schema",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/manage-identities/identity-schema",
      },
      items: flat
        ? []
        : [
            "kratos/manage-identities/managing-users-identities-metadata",
            "identities/model/manage-identity-schema",
            "kratos/manage-identities/customize-identity-schema",
            "kratos/manage-identities/best-practices",
          ],
    },
    {
      type: "category",
      label: "Emails and SMS",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "guides/email-sms",
      },
      items: flat
        ? []
        : [
            "kratos/emails-sms/sending-emails-smtp",
            "kratos/emails-sms/sending-sms",
          ],
    },
    {
      type: "category",
      label: "Session management",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/session-management/overview",
      },
      items: flat
        ? []
        : [
            "identities/sign-in/check-session",
            "kratos/session-management/session-lifespan",
            "kratos/session-management/refresh-extend-sessions",
            "kratos/session-management/revoke-sessions-hook",
            "identities/session-to-jwt-cors",
            "concepts/cache",
          ],
    },
    {
      type: "category",
      label: "Build your own UI",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/custom-ui",
      },
      items: flat
        ? []
        : [
            "kratos/bring-your-own-ui/custom-ui-basic-integration",
            "kratos/bring-your-own-ui/custom-ui-advanced-integration",
            "kratos/bring-your-own-ui/custom-ui-ory-elements",
            "kratos/concepts/ui-user-interface",
          ],
    },
    {
      type: "category",
      label: "OAuth2 token management",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "hydra/guides/oauth2-token-introspection",
      },
      items: flat
        ? []
        : [
            "oauth2-oidc/revoke-consent",
            "oauth2-oidc/skip-consent",
            {
              type: "category",
              label: "Configure tokens",
              items: [
                "oauth2-oidc/jwt-access-token",
                "hydra/guides/audiences",
                "hydra/guides/jwt",
                "hydra/guides/client-token-expiration",
                "oauth2-oidc/claims-scope",
              ],
            },
          ],
    },
    {
      type: "category",
      label: "OAuth2 client management",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "hydra/guides/oauth2-clients",
      },
      items: flat
        ? []
        : ["hydra/jwks", "hydra/guides/openid", "oauth2-oidc/issuer-url"],
    },
    "actions/live-events",
    {
      type: "category",
      label: "Migrate to Ory",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "migrate-to-ory/index",
      },
      items: flat
        ? []
        : ["migrate-to-ory/auth0", "hydra/self-hosted/migrating-from-mitreid"],
    },
  ]
}

const troubleshootingSidebar = [
  homeLink,
  {
    type: "category",
    label: "Troubleshooting",
    collapsible: false,
    collapsed: false,
    link: {
      type: "generated-index",
      slug: "category/troubleshooting/",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "troubleshooting",
      },
      "oauth2-oidc/identity-provider-integration-settings",
      "guides/upgrade/sdk-v1",
      "hydra/debug",
      "hydra/debug/logout",
      "hydra/debug/token-endpoint-auth-method",
    ],
  },
]

const identitiesSidebar = [
  homeLink,
  {
    type: "category",
    label: "Concepts",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "identities/index",
    },
    items: [
      "security-model",
      "identities/native-browser",
      "concepts/redirects",
    ],
  },
  {
    type: "category",
    label: "Self-service user flows",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "kratos/self-service",
    },
    items: [
      "kratos/concepts/browser-redirect-flow-completion",
      "kratos/self-service/flows/user-registration",
      "kratos/self-service/flows/user-login",
      "kratos/self-service/flows/user-logout",
      "kratos/self-service/flows/user-settings",
      "kratos/self-service/flows/verify-email-account-activation",
      "kratos/self-service/flows/account-recovery-password-reset",
      "kratos/self-service/flows/user-facing-errors",
    ],
  },
  {
    type: "category",
    label: "Authentication",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "kratos/concepts/credentials",
    },
    items: [
      "concepts/password-policy",
      "kratos/passwordless/passwordless",
      "kratos/mfa/overview",
    ],
  },
  {
    type: "category",
    label: "User interface",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "kratos/bring-your-own-ui/custom-ui-overview",
    },
    items: [
      "account-experience/index",
      "kratos/bring-your-own-ui/configure-ory-to-use-your-ui",
    ],
  },
  {
    type: "category",
    label: "Send Emails & SMS",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "kratos/emails-sms/custom-email-templates",
    },
    items: ["kratos/emails-sms/custom-email-templates"],
  },
]

const oauth2Sidebar = [
  homeLink,
  {
    type: "category",
    label: "Concepts",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "oauth2-oidc/index",
    },
    items: [
      "oauth2-oidc/overview/oauth2-concepts",
      "oauth2-oidc/overview/oidc-concepts",
      "hydra/concepts/before-oauth2",
      "hydra/guides/using-oauth2",
      "hydra/security-architecture",
    ],
  },
  {
    type: "category",
    label: "Flows",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "oauth2-oidc/authorization-code-flow",
    },
    items: [
      "oauth2-oidc/authorization-code-flow",
      "oauth2-oidc/client-credentials",
      "oauth2-oidc/resource-owner-password-grant",
      "oauth2-oidc/refresh-token-grant",
      "oauth2-oidc/userinfo-oidc",
      "oauth2-oidc/oidc-logout",
    ],
  },
  {
    type: "category",
    label: "User Interface",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "hydra/guides/custom-ui-oauth2",
    },
    items: ["oauth2-oidc/custom-login-consent/flow", "hydra/guides/logout"],
  },
]

const permissionsSidebar = [
  homeLink,
  {
    type: "category",
    label: "Concepts",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "keto/index",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "keto/concepts",
      },
      "keto/reference/ory-permission-language",
    ],
  },
  {
    type: "category",
    label: "Permissions",
    collapsed: false,
    collapsible: false,
    link: {
      type: "doc",
      id: "keto/index",
    },
    items: [
      "keto/guides/simple-access-check-guide",
      "keto/modeling/create-permission-model",
      "keto/guides/list-api-display-objects",
      "keto/guides/expand-api-display-who-has-access",
    ],
  },
]

const selfhostingSidebar = [
  homeLink,
  "ecosystem/projects",
  {
    type: "category",
    label: "Open source",
    items: [
      "open-source",
      "ecosystem/community",
      "ecosystem/contributing",
      "open-source/commitment",
      "ecosystem/software-architecture-philosophy",
      {
        type: "category",
        label: "Guidelines",
        items: [
          "open-source/guidelines/rest-api-guidelines",
          "kratos/guides/e2e-integration-tests",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Ory Enterprise License",
    items: [
      "self-hosted/oel/quickstart",
      "self-hosted/oel/oauth2/migrate",
      {
        type: "category",
        label: "Ory Hydra (OAuth2 Server)",
        items: [
          "self-hosted/oel/oauth2/token-prefix",
          "self-hosted/oel/oauth2/upgrade",
          "self-hosted/oel/oauth2/changelog",
        ],
      },
    ],
  },
  "self-hosted/deployment",
  "ecosystem/configuring",
  {
    type: "category",
    label: "Operations and SRE",
    items: [
      {
        type: "autogenerated",
        dirName: "self-hosted/operations",
      },
    ],
  },
  "ecosystem/upgrading",
  "ecosystem/sqa",
  "ecosystem/changelog",
  "ecosystem/benchmark",
  {
    type: "category",
    label: "Ory Kratos",
    items: [
      "kratos/install",
      "kratos/quickstart",
      "kratos/guides/docker",
      "kratos/guides/deploy-kratos-example",
      "kratos/guides/upgrade",
      {
        type: "category",
        label: "Configuration",
        items: [
          "kratos/configuring",
          "kratos/guides/configuring-cookies",
          "kratos/guides/multi-domain-cookies",
          "self-hosted/kratos/configuration/password",
          "kratos/self-hosted/mfa",
          "kratos/guides/setting-up-cors",
          "kratos/self-hosted/account-activation-email-verification",
          "self-hosted/kratos/configuration/oidc",
          "kratos/guides/setting-up-password-hashing-parameters",
          "kratos/guides/select-cipher-algorithm",
          "kratos/self-hosted/email-http",
          "kratos/reference/configuration-editor",
        ],
      },
      {
        type: "category",
        label: "Guides",
        items: [
          "kratos/guides/production",
          "kratos/guides/multi-tenancy-multitenant",
          "self-hosted/operations/scalability",
          "kratos/self-hosted/mail-courier-templates",
          "kratos/guides/tracing",
          "kratos/guides/zero-trust-iap-proxy-identity-access-proxy",
          "kratos/guides/https-tls",
          "kratos/guides/hosting-own-have-i-been-pwned-api",
          "kratos/guides/secret-key-rotation",
        ],
      },
      {
        type: "category",
        label: "Troubleshooting",
        items: [
          {
            type: "autogenerated",
            dirName: "kratos/debug",
          },
        ],
      },
      {
        type: "category",
        label: "Reference",
        items: [
          "kratos/reference/api",
          {
            "Command Line Interface (CLI)": [
              {
                type: "autogenerated",
                dirName: "kratos/cli",
              },
            ],
          },
          {
            SDK: ["kratos/sdk/overview", "kratos/self-hosted/go"],
          },
          "kratos/reference/configuration",
          "kratos/reference/json-schema-json-paths",
          "kratos/reference/html-forms",
          "kratos/reference/jsonnet",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Ory Hydra",
    items: [
      "hydra/self-hosted/install",
      "hydra/5min-tutorial",
      "hydra/self-hosted/deploy-hydra-example",
      "hydra/self-hosted/upgrade",
      {
        type: "category",
        label: "Configuration",
        items: [
          "hydra/reference/configuration",
          "hydra/reference/configuration-editor",
          "hydra/self-hosted/configure-deploy",
          "hydra/self-hosted/dependencies-environment",
          "hydra/self-hosted/production",
          "hydra/self-hosted/hsm-support",
          "self-hosted/operations/scalability",
          "hydra/self-hosted/merge-multiple-db-secrets",
          "hydra/self-hosted/gitlab",
          "hydra/self-hosted/secrets-key-rotation",
          "hydra/self-hosted/kubernetes-helm-chart",
          "hydra/self-hosted/ssl-https-tls",
          "self-hosted/operations/tracing",
          "hydra/guides/cookies",
          "hydra/guides/cors",
          "self-hosted/hydra/debug/csrf",
        ],
      },
      {
        type: "category",
        label: "Guides",
        items: [
          "hydra/reference/api",
          {
            "Command Line Interface (CLI)": [
              {
                type: "autogenerated",
                dirName: "hydra/cli",
              },
            ],
          },
          {
            SDK: [
              "hydra/sdk/overview",
              "hydra/self-hosted/go",
              "hydra/self-hosted/js",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Reference",
        items: [
          "hydra/reference/api",
          {
            "Command Line Interface (CLI)": [
              {
                type: "autogenerated",
                dirName: "hydra/cli",
              },
            ],
          },
          {
            SDK: [
              "hydra/sdk/overview",
              "hydra/self-hosted/go",
              "hydra/self-hosted/js",
            ],
          },
        ],
      },
      "ecosystem/benchmark",
      "hydra/case-study",
      "hydra/faq",
    ],
  },
  {
    type: "category",
    label: "Ory Keto",
    items: [
      "keto/install",
      "keto/quickstart",
      "keto/guides/production",
      "keto/guides/v0.7-migration",
      "keto/guides/migrating-legacy-policies",
      "keto/guides/upgrade",
      {
        Reference: [
          "keto/reference/rest-api",
          "keto/reference/proto-api",
          {
            "Command Line Interface (CLI)": [
              {
                type: "autogenerated",
                dirName: "keto/cli",
              },
            ],
          },
          {
            SDK: ["keto/sdk/overview", "keto/self-hosted/go"],
          },
          "keto/reference/configuration",
          "keto/reference/configuration-editor",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Ory Oathkeeper",
    items: [
      {
        Introduction: ["oathkeeper/index", "oathkeeper/install"],
      },
      {
        "Core Concepts": [
          "oathkeeper/api-access-rules",
          {
            type: "category",
            label: "Handlers",
            items: [
              "oathkeeper/pipeline",
              "oathkeeper/pipeline/authn",
              "oathkeeper/pipeline/authz",
              "oathkeeper/pipeline/mutator",
              "oathkeeper/pipeline/error",
            ],
          },
          "oathkeeper/grpc-middleware",
        ],
      },
      {
        Guides: [
          "oathkeeper/configure-deploy",
          "oathkeeper/guides/proxy-websockets",
          "oathkeeper/guides/traefik-proxy-integration",
          "oathkeeper/guides/upgrade",
        ],
      },
      "oathkeeper/reference/api",
      {
        Reference: [
          "oathkeeper/reference/configuration",
          "oathkeeper/reference/configuration-editor",
          {
            "Command Line Interface (CLI)": [
              {
                type: "autogenerated",
                dirName: "oathkeeper/cli",
              },
            ],
          },
          "oathkeeper/sdk",
        ],
      },
    ],
  },
  {
    type: "link",
    label: "Search",
    href: "https://www.ory.sh/docs/search",
  },
]

module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Quickstarts & tutorials",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/overview",
      },
      items: quickstartSidebar(true),
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        slug: "category/guides/",
      },
      items: guidesSidebar(true),
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        slug: "category/concepts/",
      },
      items: [
        "api/index",
        "identities/index",
        "oauth2-oidc/index",
        "keto/index",
        "kratos/hooks/configure-hooks",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        slug: "category/reference/",
      },
      items: [
        {
          type: "doc",
          id: "reference/api",
          label: "Rest API",
        },
        "sdk",
        {
          type: "doc",
          id: "cli/ory-auth",
          label: "Ory CLI",
        },
        "keto/reference/ory-permission-language",
        {
          type: "doc",
          id: "troubleshooting/index",
        },
      ],
    },
    {
      type: "category",
      label: "Operations",
      collapsed: false,
      collapsible: false,
      items: [
        "guides/manage-project-via-api",
        "guides/custom-domains",
        "console/usage-billing",
        "console/change-owner",
        "guides/gitops",
      ],
    },
    {
      type: "category",
      label: "Compliance and security",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "security-compliance/compliance-and-certifications",
      },
      items: [
        "kratos/concepts/security",
        "ecosystem/security",
        "security-compliance/personal-data-location",
        "security-compliance/gdpr",
        "security-compliance/token-formats",
      ],
    },
    {
      type: "link",
      href: "https://www.ory.sh/docs/search",
      label: "Search",
    },
  ],
  reference: referenceSidebar,
  "quickstarts-and-tutorials": quickstartSidebar(false),
  guides: guidesSidebar(false),
  troubleshooting: troubleshootingSidebar,
  identities: identitiesSidebar,
  oauth2: oauth2Sidebar,
  permissions: permissionsSidebar,
  selfhosting: selfhostingSidebar,

  sdk: [],
  api: [],
}
