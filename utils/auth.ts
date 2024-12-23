import { AuthClient } from "@dfinity/auth-client";
import { Identity } from "@dfinity/agent";

export const initAuthClient = async (): Promise<AuthClient> => {
  const authClient = await AuthClient.create();
  return authClient;
};

export const loginWithPlug = async (): Promise<Identity> => {
  const authClient = await initAuthClient();

  return new Promise((resolve, reject) => {
    authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          const identity = authClient.getIdentity();
          resolve(identity);
        },
        onError: (error?: string) => {
          reject(new Error(`Login failed: ${error ?? "Unknown error"}`));
        },
      });
      
  });
};
