export const isSessionPersistent = (stateKey: string) => {
    const sessionData = sessionStorage.getItem(stateKey);
    return sessionData && JSON.parse(sessionData);
}