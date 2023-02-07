import { createSlice } from "@reduxjs/toolkit";

const activeChapter = createSlice({
    name: "activeChapter",
    initialState: {
        "id": 1,
        "revelation_place": "makkah",
        "revelation_order": 5,
        "bismillah_pre": false,
        "name_simple": "Al-Fatihah",
        "name_complex": "Al-Fātiĥah",
        "name_arabic": "الفاتحة",
        "words": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ",
        "verses_count": 7,
        "pages": [
            1,
            1
        ],
        "translated_name": {
            "language_name": "english",
            "name": "The Opener"
        },
        "audio_files": [
            {
                "mishari_al_afasy": "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/mishari.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/mishari-sm.webp?raw=true"
            },
            {
                "Abu Bakr al-Shatri": "https://download.quranicaudio.com/qdc/abu_bakr_shatri/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/abu-bakr.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/abu-bakr-sm.webp?raw=true"
            },
            {
                "Sa`ud ash-Shuraym": "https://download.quranicaudio.com/qdc/saud_ash-shuraym/murattal/001.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/shuraym.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/shuraym-sm.webp?raw=true"
            },
            {
                "Khalifah Taniji": "https://download.quranicaudio.com/qdc/khalifah_taniji/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/taniji.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/taniji-sm.webp?raw=true"
            },
            {
                "Hani ar-Rifai": "https://download.quranicaudio.com/qdc/hani_ar_rifai/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/rifai.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/rifai-sm.webp?raw=true"
            },
            {
                "Mahmoud Khaleel Al-Husary": "https://download.quranicaudio.com/qdc/khalil_al_husary/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/husary.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/husary-sm.webp?raw=true"
            },
            {
                "Muhammad Siddiq al-Minshawi": "https://download.quranicaudio.com/qdc/siddiq_minshawi/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/minshawi.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/minshawi-sm.webp?raw=true"
            },
            {
                "Abdul Basit Abdul Samad": "https://download.quranicaudio.com/qdc/abdul_baset/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/abdul-samd.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/abdul-samd-sm.webp?raw=true"
            },
            {
                "Abdur-Rahman as-Sudais": "https://download.quranicaudio.com/qdc/abdurrahmaan_as_sudais/murattal/1.mp3",
                "poster": "https://github.com/ProNabowy/Quran/blob/main/images/sudais.webp?raw=true",
                "bg-sm": "https://github.com/ProNabowy/Quran/blob/main/images/sudais-sm.webp?raw=true"
            }
        ]
    },
    reducers: {
        getCurrentChapter: (state, action) =>
        {
            return action.payload;
        }
    }
});


export default activeChapter.reducer;
export const { getCurrentChapter} = activeChapter.actions;