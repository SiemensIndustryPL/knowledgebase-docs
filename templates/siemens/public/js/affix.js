function setActiveRightMenuItem(currentId) {
    const links = Array.from(document.querySelectorAll('.affix ul li a'));
    if (!links.length) return;

    links.forEach((a) => a.classList.remove('active'));
    if (!currentId) return;

    const normalizeId = (s) => {
        if (s == null) return '';
        const raw = String(s);
        const noHash = raw.startsWith('#') ? raw.slice(1) : raw;
        let decoded = noHash;
        try { decoded = decodeURIComponent(noHash); } catch {}
        return decoded;
    };

    const findLinkById = (id) => links.find((a) => {
        const href = a.getAttribute('href') || '';
        try {
            const url = new URL(href, window.location.href);
            const linkId = normalizeId(url.hash);
            return linkId === id;
        } catch {
            const linkId = normalizeId(href);
            return linkId === id;
        }
    });

    let target = findLinkById(currentId);
    if (target) {
        target.classList.add('active');
        return;
    }

    const headings = Array.from(
        document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
    );
    if (!headings.length) return;

    const index = headings.findIndex((h) => h.id === currentId);
    if (index === -1) return;

    for (let i = index + 1; i < headings.length; i++) {
        const nextId = headings[i].id;
        const nextTarget = findLinkById(nextId);
        if (nextTarget) {
            nextTarget.classList.add('active');
            return;
        }
    }
}

function observeHeadingsAndSyncMenu() {
    const headings = Array.from(
        document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
    );
    if (!headings.length) return;

    const sectionVisibleHeight = (index) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const viewportTop = scrollTop;
        const viewportBottom = viewportTop + window.innerHeight;

        const currentHeading = headings[index];
        const nextHeading = headings[index + 1] || null;

        const sectionTop = currentHeading.offsetTop;
        const sectionBottom = nextHeading ? nextHeading.offsetTop : (document.documentElement.scrollHeight || document.body.scrollHeight);

        const visibleTop = Math.max(sectionTop, viewportTop);
        const visibleBottom = Math.min(sectionBottom, viewportBottom);
        const visible = Math.max(0, visibleBottom - visibleTop);
        return visible;
    };

    const pickTopSection = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const headerOffset = 400;
        const viewportTop = scrollTop + headerOffset;
        for (let i = 0; i < headings.length; i++) {
            const currentHeading = headings[i];
            const nextHeading = headings[i + 1] || null;
            const sectionTop = currentHeading.offsetTop;
            const sectionBottom = nextHeading ? nextHeading.offsetTop : (document.documentElement.scrollHeight || document.body.scrollHeight);
            if (sectionTop <= viewportTop && viewportTop < sectionBottom) {
                return currentHeading;
            }
        }
        for (let i = 0; i < headings.length; i++) {
            if (sectionVisibleHeight(i) > 0) return headings[i];
        }
        return headings[0];
    };

    const sync = () => {
        if (observeHeadingsAndSyncMenu._tick) return;
        observeHeadingsAndSyncMenu._tick = true;
        requestAnimationFrame(() => {
            observeHeadingsAndSyncMenu._tick = false;
            const top = pickTopSection();
            setActiveRightMenuItem(top?.id);
        });
    };

    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);

    window.addEventListener('hashchange', () => {
        let id = (location.hash || '');
        try { id = decodeURIComponent(id); } catch {}
        id = id.replace('#', '');
        if (id) setActiveRightMenuItem(id);
    });

    let initIdRaw = (location.hash || '');
    try { initIdRaw = decodeURIComponent(initIdRaw); } catch {}
    const initId = initIdRaw.replace('#', '') || headings[0].id;
    setActiveRightMenuItem(initId);
    sync();
}

export const affix = {
    start: () => {
        setTimeout(observeHeadingsAndSyncMenu, 300);
    },
};

export default affix;
