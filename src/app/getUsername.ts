export function getUsername(router) {
    const userName = router.url.split('/')[2];
    return userName;
}