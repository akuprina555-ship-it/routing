function FindProxyForURL(url, host) {
    // 1. Все сайты в зонах .ru и .su, а также vk.com — строго напрямую (родной IP)
    if (shExpMatch(host, "*.ru") || shExpMatch(host, "*.su") || dnsDomainIs(host, "vk.com") || localHostOrDomainIs(host, "vk.com")) {
        return "DIRECT";
    }

    // 2. Всё остальное в интернете (включая .com, .net, qcomment) — строго через прокси
    return "PROXY 148.253.210.145:439";
}
