export function extractValidResponse(text) {
    if (typeof text !== 'string') {
        return ""; // Kembalikan string kosong jika input bukan string
    }
    let cleanedText = text.trim();

    // 1. Coba ekstrak dari blok kode Markdown (jika AI membungkus JSON di dalamnya)
    const markdownMatch = cleanedText.match(/```json\s*([\s\S]*?)\s*```/);
    if (markdownMatch && markdownMatch[1]) {
        cleanedText = markdownMatch[1].trim();
        // Setelah ekstraksi dari markdown, coba langsung parse.
        // Jika berhasil, JSON ini mungkin sudah bersih.
        try {
            JSON.parse(cleanedText);
            return cleanedText;
        } catch (e) {
            // Jika gagal parse, lanjutkan ke metode ekstraksi berikutnya
            console.warn("Extracted from markdown but still not valid JSON, trying other methods.");
        }
    }

    // 2. Cari JSON objek '{...}' atau array '[...]' pertama yang valid
    // Ini berguna jika JSON tertanam dalam teks lain.
    let firstOpenBrace = cleanedText.indexOf('{');
    let firstOpenBracket = cleanedText.indexOf('[');
    let lastCloseBrace = cleanedText.lastIndexOf('}');
    let lastCloseBracket = cleanedText.lastIndexOf(']');

    let potentialJson = "";

    // Tentukan apakah kita mencari objek atau array berdasarkan kemunculan pertama
    if (firstOpenBrace !== -1 && (firstOpenBracket === -1 || firstOpenBrace < firstOpenBracket)) {
        // Kemungkinan besar objek JSON
        if (lastCloseBrace > firstOpenBrace) {
            potentialJson = cleanedText.substring(firstOpenBrace, lastCloseBrace + 1);
        }
    } else if (firstOpenBracket !== -1) {
        // Kemungkinan besar array JSON
        if (lastCloseBracket > firstOpenBracket) {
            potentialJson = cleanedText.substring(firstOpenBracket, lastCloseBracket + 1);
        }
    }

    if (potentialJson) {
        try {
            // Validasi apakah substring ini benar-benar JSON yang valid
            JSON.parse(potentialJson);
            return potentialJson; // Jika valid, kembalikan substring ini
        } catch (e) {
            // Jika substring tidak valid, berarti ekstraksi sederhana gagal.
            // Biarkan fallback ke teks asli yang sudah di-trim.
            console.warn("Substring extraction failed to produce valid JSON. Falling back to trimmed original.");
        }
    }

    // 3. Jika tidak ada ekstraksi spesifik yang berhasil, kembalikan teks asli yang sudah di-trim.
    // JSON.parse() akan mencoba mem-parsingnya. Jika masih ada teks prefix, ia akan gagal seperti semula,
    // namun ini adalah fallback terakhir.
    return cleanedText;
}