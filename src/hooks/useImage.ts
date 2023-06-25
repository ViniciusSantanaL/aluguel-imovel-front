export function getImageUrl(name: string) {
    return new URL(`./assets/${name}.png`, import.meta.url).href
}
