function FindProxyForURL(url, host) {
    // 1. Исключения: VK.com и поддомены (например, m.vk.com) пускаем напрямую
    if (shExpMatch(host, "vk.com") || shExpMatch(host, "*.vk.com")) {
        return "DIRECT";
    }

    // 2. Все сайты в зонах .ru и .su — пускаем напрямую через родной IP
    if (shExpMatch(host, "*.ru") || shExpMatch(host, "*.su")) {
        return "DIRECT";
    }

    // 3. Главное условие: всё в зоне .com (включая qcomment.com) пускаем ТУГО через ваш прокси
    if (shExpMatch(host, "*.com")) {
        return "PROXY 148.253.210.145:8000";
    }

    // 4. Все остальные сайты (org, net и т.д.) по умолчанию идут напрямую
    return "DIRECT";
}