

export default function uniqueid(w?: any): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let count = 5
    if (w && !isNaN(parseFloat(w)) && isFinite(w)) count = w
    for (var i = 0; i < count; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}