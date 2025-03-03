export enum queryKeys {
  FnId = "fnId",
  StepId = "stepId",
  Introspect = "introspect",
}

export enum envKeys {
  SigningKey = "INNGEST_SIGNING_KEY",
  EventKey = "INNGEST_EVENT_KEY",
  LandingPage = "INNGEST_LANDING_PAGE",
  DevServerUrl = "INNGEST_DEVSERVER_URL",
}

export enum prodEnvKeys {
  NodeEnvKey = "NODE_ENV",
  VercelEnvKey = "VERCEL_ENV",
  NetlifyEnvKey = "CONTEXT",
}

export const defaultDevServerHost = "http://127.0.0.1:8288/";
